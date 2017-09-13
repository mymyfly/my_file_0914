/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/8/16
 */
define([],function(){
    var productCount=1000;

    //为了让外界可以访问到productCount，就应该给外界暴露一个接口
    return {
        getCount:function(){
            alert(productCount);

        }
    }
})