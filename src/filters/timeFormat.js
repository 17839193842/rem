export const normalTime = (time) => {
//  if (time) {
//      var oDate = new Date();
//      oDate.setTime(time);
//
//      var y = oDate.getFullYear();
//      var m = oDate.getMonth() + 1;
//      var d = oDate.getDate();
//
//      var h = oDate.getHours();
//      var m = oDate.getMinutes();
//      var s = oDate.getSeconds();
//
//      return y + '-' + m + '-' + d + ' ' + h + ':' + m + ':' + s;
//  }
//  
    if(time){
       var oDate = new Date() //时间戳为10位需*1000，时间戳为13位的话不需乘1000
         oDate.setTime(time);
        var Y = oDate.getFullYear();
        var M = (oDate.getMonth()+1 < 10 ? '0'+(oDate.getMonth()+1) : oDate.getMonth()+1) ;
        var D = oDate.getDate() < 10 ? '0' + oDate.getDate() : oDate.getDate();
        var h = oDate.getHours() <10 ? '0' + oDate.getHours() : oDate.getHours();
        var m = oDate.getMinutes() <10 ? '0' + oDate.getMinutes() : oDate.getMinutes();
        var s = oDate.getSeconds() <10 ? '0' + oDate.getSeconds() : oDate.getSeconds();
        return Y+'-'+M+'-'+D+' '+h+':'+m+':'+s;
       }

}