/**
 * Created by Jerry on 2015/8/30.
 */
define(["jquery","avalon"],function(){
    var randomInfoModel = avalon.define({
        $id :"randomInfo-model",
        //随机生成用户名
        makeRandomName:function(){
            var char="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ赵钱孙李周吴郑王";
            var name = "";
            for(var i =0;i<9;i++){
                //name+= char[Math.floor(Math.random()*10)];
                name += char.charAt(Math.floor(Math.random()*char.length));
            }
            //console.log(name);
            return name;
        }
    });

    return{
        init:function(vm){
            vm.userModel.name = randomInfoModel.makeRandomName();

        }
    }
})