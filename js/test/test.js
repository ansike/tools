require(['js/init','Common','Common2'],function () {
	var com2 = require('Common2');
	//测试时间
	var time = new Date(1517553344000).Format('YYYY-MM-DD')
	var time2 = new Date('2018-02-02 14:35:44').Format('YYYY-MM-DD hh:mm:ss')
	console.log(time);
	console.log(time2);

	//测试cookie
	com2.setCookie('user','时间大asd概是')
	var user = com2.getCookie('user')
	console.log(user);

	var name = com2.getQuery('name');
	console.log(name);

	var days = com2.getDaysMonth(2018,2);
	console.log(days);
debugger
})