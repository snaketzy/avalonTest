/**
 * Created by Jerry on 2015/8/24.
 */
define(["../jquery-2.1.4"],function($){
    return{
        show:function(){
            var mycanvas = $("#canvas")[0];
            var mycontext = mycanvas.getContext('2d');
            mycontext.fillStyle='rgb(0,0,255)';
            setInterval(function(){
                mycontext.fillRect(30,30,300,300);
            },1000);
        }
    }
})