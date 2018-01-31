define(function(){
    function Format(timeStamp,fmt) {
		timeStamp = timeStamp ? timeStamp : new Date();
	    var o = {
	        "M+": timeStamp.getMonth() + 1, //月份
	        "N+": timeStamp.getMonth(), //月份
	        "D+": timeStamp.getDate(), //日
	        "h+": timeStamp.getHours(), //小时
	        "m+": timeStamp.getMinutes(), //分
	        "s+": timeStamp.getSeconds(), //秒 //季度
	        "S": timeStamp.getMilliseconds(), //毫秒
	        "q+": Math.floor((timeStamp.getMonth() + 3) / 3)
	    };
	    if (/(Y+)/.test(fmt)) {
	        fmt = fmt.replace(RegExp.$1, (timeStamp.getFullYear() + "").substr(4 - RegExp.$1.length))
	    };
	    for (var k in o) {
	        if (new RegExp("(" + k + ")").test(fmt)) {
	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
	        };
	    }
	    return fmt;
	    /*
	      var time1 = dateNow().Format("YYYY-MM-DD");
	    var time2 = dateNow().Format("YYYY-MM-DD hh:mm:ss");
	      */
	}

    return {
    	Format:Format
    }
})