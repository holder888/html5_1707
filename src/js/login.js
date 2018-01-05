!function(){
	document.addEventListener('DOMContentLoaded',function(){

		//-------登录验证开始----------
		var username = document.querySelector('#username');
		var password = document.querySelector('#password');
		var btnLogin = document.querySelector('#btnLogin');
		
		btnLogin.onclick = ()=>{
			var _username = username.value;
			var _password = password.value;
			var tishi = document.querySelector('.tishi');

			//发起ajax请求
			var xhr_login = new XMLHttpRequest();

			var status = [200,304];

			xhr_login.onload = ()=>{
				if(status.includes(xhr_login.status)){
					// console.log(xhr_login.responseText);
					if(xhr_login.responseText == 'no'){
						tishi.innerHTML = '用户名或密码错误'
						return;
					}
					else if(xhr_login.responseText == 'yes'){
						tishi.innerHTML = '恭喜您登录成功,3s后跳转到首页'
						setTimeout(()=>{
							location.href = 'http://localhost:2018/index.html';
						},3000);
					}
				}
			}

			xhr_login.open('get','../api/login.php?username='+_username+'&password='+_password,true);

			xhr_login.send();
		}
	});
}();