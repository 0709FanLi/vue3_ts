import path from 'path';
import fs from 'fs';
import {marked} from 'marked';

marked.setOptions({
  highlight: function (code, lang, callback) {
    require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
      callback(err, result.toString());
    });
  }
});


export function md () {
  // 返回的是插件对象
  return {
    name: 'md-html',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // 自定义请求处理...
        if(req.url.includes('.md')){
          let mdPath = req.url.split('?')[0];
          const filePath = path.join(process.cwd(), mdPath);
          res.send ={
            status:'ok'
          }
          next()
          return;
        } else {
          next()
        }
      })
    },
    transform(src, id) {
      if(id.includes('.md')){
        console.log('id-------',id);
        let mdPath = id.split('?')[0];
        console.log('mdPath', mdPath);
        let mdStr = fs.readFileSync(mdPath).toString()
        content = String(marked(mdStr)) + '';
        console.log('content==========>', content);
        return {
          code: `export default ${JSON.stringify(content)}`,
          map:null,
        }
      }
    }
  };
}
