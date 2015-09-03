/**
 * Created by Jerry on 2015/8/23.
 */
define(["../jquery-2.1.4"],function ($) {
    return {
        showInfo : function(){
            var ele = $("#div")[0].innerText;
            console.log(ele);
            console.log($().jquery);
        },
        showInfo2 : function(){

        }
    };
});