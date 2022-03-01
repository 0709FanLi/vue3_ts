<link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
## 类型检测
- 基本类型
number string null undefined boolean bigint symbol
- 引用类型
对象 object 包含 array function regxp math date

共有十二种

```
console.log(typeof 1);              // number
console.log(typeof 'a');            // string
console.log(typeof null);           // object
console.log(typeof undefined);      // undefined
console.log(typeof true);           // boolean
console.log(typeof 1n);             // bigint
console.log(typeof Symbol(1));      // symbol
console.log(typeof {a:1});          // object
console.log(typeof [1]);            // object
console.log(typeof function(){});   // function
console.log(typeof /http/);         // object
console.log(typeof Math);           // object
console.log(typeof new Date());     // object
```
- 基本类型除了 null,都可以正确检测出类型
- 引用类型只有 function,正确检测出，哦，object也算，

来使用 toString 函数，先来封装

```
function toRawType(type){
    return Object.prototype.toString.call(type).slice(8, -1);
}
console.log(toRawType(1));              // Number
console.log(toRawType('a'));            // String
console.log(toRawType(null));           // Null
console.log(toRawType(undefined));      // Undefined
console.log(toRawType(true));           // Boolean
console.log(toRawType(1n));             // BigInt
console.log(toRawType(Symbol(1)));      // symbol
console.log(toRawType({a:1}));          // Object
console.log(toRawType([1]));            // Array
console.log(toRawType(function(){}));   // Function
console.log(toRawType(/http/));         // RegExp
console.log(toRawType(Math));           // Math
console.log(toRawType(new Date()));     // Date
```

每个类型都正确的检测出来了，首字母大写，当然可以自行转换为小写，这样就和typeof效果基本相同了。

- ` in ` [如果指定的属性在指定的对象或其原型链中，则**`in` 运算符**返回`true`。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/in)


```
function People(){};
People.prototype.say = 'hi!';
let child = new People();
child.name = '401';
console.log('name' in child);  // true
console.log('say' in child);   // true 
console.log('age' in child);   // false
```
- ` hasOwnProperty  ` 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

```
function People(){this.name = ''};
People.prototype.say = 'hi!';
let child = new People();
child.name = '401';
console.log(child.hasOwnProperty('name'))   // true
console.log(child.hasOwnProperty('say'))    // false
```
- **`instanceof`** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```
function People(){this.name = ''};
People.prototype.say = 'hi!';
let child = new People();
console.log(child instanceof People)    // true
console.log(child instanceof Object)    // true
```
能不能手写 instanceof

```
function myInstanceof(left, right){
    //  基本数据类型直接返回
    if(typeof left !== 'object' || left === null) return;
    let protype = left.__proto__;
    while(true){
        if(protype == null) return false;
        if(protype == right.prototype) return true;
        //  关键步骤
        protype = protype.__proto__;
    }
}
//  验证
function People(){this.name = 'ss'};
People.prototype.say = 'hi!';
let child = new People();
function Human(){this.name = 'ss'};
console.log(myInstanceof(child, People))    // true
console.log(myInstanceof(child, Object))    // true
console.log(myInstanceof(child, Human))     // false
</script>

```

## 类型转换
显示类型转换就三种
- 转数字 Number()
- 转字符串 String()
- 转布尔值 Bllean()
转换规则


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d3422b52a9524570acb177a2c7663c87~tplv-k3u1fbpfcp-watermark.image)

盗个图，[原文链接](https://juejin.cn/post/6844903974378668039#heading-13)，推荐去阅读三元大佬的原文。

隐式类型转换

隐式类型转换触发的条件，我看了一些文章，触发条件挺多的，触发条件也好，转换规则也好，其实我觉得最有价值的还是 == 运算符，这个最常见，是用的最多的，就只记录这个。

来个题 

```
![] == []
```
成立吗? 都知道成立哈，先来看规则，然后对号入座
1.   两边的类型是否相同，相同的话就比较值的大小，例如1==2，返回false

2.  判断的是否是null和undefined，是的话就返回true

3.  判断的类型是否是String和Number，是的话，把String类型转换成Number，再进行比较

4.  判断其中一方是否是Boolean，是的话就把Boolean转换成Number，再进行比较

5.  如果其中一方为Object，且另一方为String、Number或者Symbol，会将Object转换成字符串，再进行比较
6.  左右两边都需要转换为数字然后进行比较
[]   空数组转换为转数字为0，可看上边的图片
![]  先转化为布尔值,[]为引用类型，转化布尔值为true,而 !true为false,转化为数字为0，

0 == 0，就这样成立了。

本文纯记录自己所学和易忘的点，参考的文章，推荐阅读原文

[**(建议收藏)原生JS灵魂之问, 请问你能接得住几个？(上)**](https://juejin.cn/post/6844903974378668039#heading-13)


















