import { type } from 'os'
import { Ref, ref } from 'vue'

type TApiFun<TData, TParams extends Array<any>> = (...params: TParams) => Promise<TData>

type helloWorld = string

const str: helloWorld = 1

interface AutoRequestOptions {
  loading?: boolean
  onSuccess?: (data: any) => void
}

type AutoRequestResult<TData, TParams extends Array<any>> = [Ref<boolean>, TApiFun<TData, TParams>]

export function useAutoRequest<TData, TParams extends any[] = any[]>(
  fun: TApiFun<TData, TParams>,
  options?: AutoRequestResult<TData, TParams>
) {
  const { loading = false, onSuccess } = options || { loading: false }
  const requestLoading = ref(loading)
  const run: TApiFun<TData, TParams> = (...params) => {
    requestLoading.value = true
    return fun(...params)
      .then((res) => {
        onSuccess && onSuccess(res)
        return res
      })
      .finally(() => {
        requestLoading.value = false
      })
  }
  return [requestLoading, fun]
}
