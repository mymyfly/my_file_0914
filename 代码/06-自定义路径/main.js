/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/8/16
 */
require.config({
    baseUrl:"js", //以后找模块的时候，都是从：06-自定义路径/js
    //对于常用的一些文件或者文件夹才需要配置特定的路径
    paths:{
        //指定特定js文件的路径
        jquery:"lib/jquery-2.1.4",       //也是基于baseUrl的，拼接出来的结果：js/lib/jquery-2.1.4
        //指定特定文件夹路径-->以后使用这样的文件夹，一定要以该名字为前缀
        bootstrap:"../assets/bootstrap"
    }
})

require(["teacher/teacherMain","jquery","bootstrap/js/bootstrap"],function(teacherMain,$$){
    console.log($$);
    
    teacherMain();
})