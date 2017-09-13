/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/8/16
 */
var cart=(function(){
    var productCount=1000;
    
    return {
        init:function(){
            alert("加载购物车功能");
        },
        getCount:function(){
            alert(productCount);
        },
        addCount:function(){
            productCount++;
        }

    }
    
})()