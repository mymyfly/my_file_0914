git/bash命令：选项和参数是可以颠倒的
如果有2个选项，这2个选项的位置也是随意的
如果有2个参数，这2个参数的位置是不能颠倒的

# RequireJS：是一个基于原生js实现的模块化解决方案
## 模块化
### 模块化是什么？
+ 具有实现一个完整功能的整体
    -
### 为什么要使用模块化?
+ 为了更好地复用
+ 减少全局变量污染
    var KTV=(function(){
        var leastPrice=1000;
        var total=0;

        return {
            pay:function(){
                if(total>=leastPrice){
                    alert("买单成功");
                }
            }
        }
    })()

+ 解决功能之间的依赖关系

### 模块化的实现方式
#### 使用闭包来实现
+ 闭包实现存在的缺点
    - 随着功能的增加，暴露的全局变量也会越来越多
        - requireJS几乎没有全局变量
    - 不能很好的解决模块依赖的问题


#### 使用主流的一些实现模块化的库来实现
+ requireJS-->AMD规范
    - seaJS-->CMD规范 ：玉伯
+ browserify
+ webpack(后面的课程)

+ mv*框架
    - angular vue backbone avalon
+ 组件化
    - react /react native /ionic

### AMD规范和CMD规范
AMD规范就是指requireJS
    -->async module define：异步模块定义(异步加载模块、依赖前置)
        -->模块定义和导入(使用)
        -->异步加载模块
        -->依赖前置：把所有依赖的模块放在文件的头部
CMD规范就是指的seajs
    -->common module define：通用模块定义(同步加载模块)
        -->同步加载模块
        -->依赖就近：50行代码使用商品模块的功能，就在49行依赖商品模块

CommonJS规范：nodeJS

## requireJS
requireJS/angular/vue都是适用于：单页应用：Single Page Application(SPA)



### requireJS这种模块化解决方案称之为AMD规范
+ AMD：async module define：异步模块定义
+ 与之非常相似的有CMD规范-->sea.js(玉伯)
    - CMD：common module define(-->借鉴了nodeJS中的CommonJS规范)
+ 模块化规范：AMD CMD CommonJS
+ 模块化解决方案：requireJS seaJS browserify webpack
+ MV*框架：angular / vue
    - MV*：mvc mvvm mvp
+ 组件化开发：react

### 官方网站：
英文版：http://requirejs.org/
中文版：http://www.requirejs.cn/
github：https://github.com/requirejs/requirejs

### 入门
1. 下载requirejs文件
2. 在需要使用requireJS的html页面中引入requirejs文件
3. 编写js代码
    + 在a.js文件中通过来定义一个模块(tip:约定一个js文件就是一个模块)
    ```js
    define([],function(){
      //模块内部的代码
    })
    ```
    + 在b.js文件中从而获取a.js中的代码，这样的话就可以保证在执行b.js中的代码之前先执行了a.js中的代码
    ```js
    require(["a"],function(){

    })
    ```

### 依赖注入：模块具有返回值：
1. 给定义模块的回调函数添加return语句
```js
//a.js文件中
define(function(){
    return 10;
})
//b.js文件中
define(function(){
    return {name:"张三"};
})
```
2. 在获取模块的时候，通过require()的第二个参数来依次获取各个模块的返回值
```js
require(["./a.js","./b.js"],function(a,b){
    console.log(a);//10
    console.log(b.name);//"张三"
})
```

### 入口文件
通过给引入requirejs时的script标签添加data-main属性值，那么requirejs就会自动加载该文件(模块)，可以通过该文件来进行访问其他的模块
```html
<script src="require.js" data-main="./main"></script>
```

### 如何检测第三方库是否支持AMD规范？
查看源代码，看看是否有以下内容？如果有，说明支持AMD规范，如果没有说明不支持
```js
if (typeof define === "function" && define.amd) {}
```


### 路径(加载模块时遵循的规则)
+ 如果没有入口文件，加载模块时的路径以引入requirejs时的路径为准(优先级最低)
+ 如果有入口文件，加载模块的路径以入口文件所在目录为准(优先级次高)
+ 通过配置来自定义路径(优先级最高)
```js
require.config({
    //这里的baseUrl还是相对于html文件
    baseUrl:""
})
```

### 配置常用的模块路径(比如：jquery/arttemplate)
```js
require.config({
    baseUrl:"./lib",
    paths:{
        //路径不需要.js后缀，最终该文件的路径将会和baseUrl拼接，也就是："./lib/js/jquery-2.1.4"
        jquery:"js/jquery-2.1.4"
    }
})
//a.js文件中
define(["jquery"],function($){
    //这里请求的jquery也就是去上面paths中设置的jquery进行查找,也就是："./lib/js/jquery-2.1.4"

})

```


### 如果一个js文件不支持AMD这种模块定义规范(比如bootstrap.js)，但是它又依赖于我们定义的模块(jquery)，通过以下方式来解决
```js
require.config({
    baseUrl:"./lib",
    paths:{
        //路径不需要.js后缀，最终该文件的路径将会和baseUrl拼接，也就是："./lib/js/jquery-2.1.4"
        jquery:"js/jquery-2.1.4",
        bootstrap:"assets/bootstrap/bootstrap"
    },
    shim:{
        bootstrap:{
            //这样在请求bootstrap的时候会自动去请求jquery模块
            deps:["jquery"]
        }
    }
})
```


