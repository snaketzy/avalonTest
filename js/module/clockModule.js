/**
 * Created by Jerry on 2015/8/25.
 */
define(function(){

    function createCircleClip(id){
    //获得canvas对象
        var mycanvas = document.getElementById(id);
        var mycontext = mycanvas.getContext('2d');
        mycontext.fillStyle='rgb(0,0,255)';
        setInterval(function(){
            mycontext.fillRect(30,30,300,300);
        },1000);
    }


    return{
        showClock:function(id){
            createCircleClip(id);
            console.log(id);
        }
    }
})