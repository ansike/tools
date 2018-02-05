define(function(){
    /*
		设置cookie的值（2018-2-2）
		setCookie('user','撒空间很大健康',10);
    */
    function setCookie(name, value, Days){
	    Days = Days || 30;
	    var date = new Date();
	    date.setTime(date.getTime() + Days*24*60*60*1000);
	    document.cookie = name + "="+ encodeURIComponent(value) + ";expires=" + date.toGMTString();
	}
    /*
		通过key获取cookie的值（2018-2-2）
		var user = getCookie('user')
    */
    function getCookie(name){
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
      return decodeURIComponent(arr[2]);
      else
      return null;
    }

    /*
    	（2018-2-2）
    	获取query参数
    */
    function getQuery(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURIComponent(r[2]);
      return null;
    }

    /*
    	（2018-2-2）
    	获取某年某月总共有多少天

    */
    function getDaysMonth(year, month){
	  	month = parseInt(month, 10);  
	  	var d= new Date(year, month, 0);  
	  	return d.getDate();  
	}
   	return {
   		getCookie:getCookie,
   		setCookie:setCookie,
   		getQuery:getQuery,
   		getDaysMonth:getDaysMonth,
   	}
}())