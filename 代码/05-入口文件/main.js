/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/8/16
 */
require(["teacherMain"],function(teacherMain){

    var btnTeaher=document.querySelector("#btnTeacher");
    btnTeaher.onclick=function () {
        //加载出讲师管理模块
        teacherMain();
    }
    
    
});