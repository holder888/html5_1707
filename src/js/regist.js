!function(){
	document.addEventListener('DOMContentLoaded',function(){

		//----注册部分开始----------
		var btnRegist = document.querySelector('.btnRegist');

		var username = document.querySelector('#username');
		var password = document.querySelector('#password');
		var confirmPassword = document.querySelector('#confirmPassword');
		var phoneNumber = document.querySelector('#phoneNumber');
		var yzNumber = document.querySelector('#yzNumber');
		var dxNumber = document.querySelector('#dxNumber');
		var emailNumber = document.querySelector('#emailNumber');
		var xuanze = document.querySelector('#xuanze');

		var yhm = document.querySelector('.yhm');
		var mm = document.querySelector('.mm');
		var qrmm = document.querySelector('.qrmm');
		var sjh = document.querySelector('.sjh');

		//分别判断获得焦点和失去焦点的状态
		//用户名
		username.onfocus = ()=>{
			yhm.children[1].style.display = 'block';
			yhm.children[0].style.display = 'none';
			return
		}
		username.onblur = ()=>{
			if(username.value.trim() == ''){
				yhm.children[0].style.display = 'block';
				yhm.children[1].style.display = 'none';
				return;
			}
			if(!/^[a-z][\da-z]{5,19}$/i.test(username.value)){
				yhm.children[0].style.display = 'block';
				yhm.children[0].children[1].innerHTML = '只能6-20位字符间';
				return;
			}else{
				yhm.children[2].style.display = 'block';
			}
		}

		//密码
		password.onfocus = ()=>{
			mm.children[1].style.display = 'block';
			mm.children[0].style.display = 'none';
			return;
		}
		password.onblur = ()=>{
			if(username.value.trim() == ''){
				mm.children[0].style.display = 'block';
				mm.children[1].style.display = 'none';
				return;
			}
			if(!/^[a-zA-Z]\w{7,19}$/i.test(password.value)){
				mm.children[0].style.display = 'block';
				mm.children[0].children[1].innerHTML = '密码不合法';
			}else{
				mm.children[2].style.display = 'block';
				mm.children[0].dispaly = 'none';
			}
		}

		//确认密码
		confirmPassword.onfocus = ()=>{
			qrmm.children[1].style.display = 'block';
			qrmm.children[0].style.display = 'none';
			return;
		}
		confirmPassword.onblur = ()=>{
			if(confirmPassword.value.trim() == ''){
				qrmm.children[0].style.display = 'block';
				qrmm.children[1].style.display = 'none';
				return;
			}
			if(confirmPassword.value != password.value){
				qrmm.children[1].style.display = 'block';
				qrmm.children[1].children[1].innerHTML = '两次密码不一致';
			}else{
				qrmm.children[2].style.display = 'block';
				qrmm.children[1].style.display = 'none';
			}
			
		}

		//手机号
		phoneNumber.onfocus = ()=>{
			sjh.children[1].style.display = 'block';
			sjh.children[0].style.display = 'none';
			return;
		}
		phoneNumber.onblur = ()=>{
			if(phoneNumber.value.trim() == ''){
				sjh.children[0].style.display = 'block';
				sjh.children[1].style.display = 'none';
				return;
			}
			if(! /^[1][34578]\d{9}$/.test(phoneNumber.value)){
				sjh.children[1].style.display = 'block';
				sjh.children[1].children[1].innerHTML = '手机号格式不对';
			}else{
				sjh.children[2].style.display = 'block';
				sjh.children[1].style.display = 'none';
			}
		}


		
		//验证码
		function creatYzm(n){
			var res = '';
			for(var i=0;i<n;i++){
				var num = parseInt(Math.random()*10);
				res += num;
			}
			return res;
		}
		var code = document.querySelector('.code');
		var change = document.querySelector('.change');
		var cuowu = document.querySelector('.cuowu');
		code.innerHTML = creatYzm(6);
		change.onclick = ()=>{
			code.innerHTML = creatYzm(6);
			cuowu.style.display = 'none';
		}

		yzNumber.onblur = ()=>{
			if(yzNumber.value.trim() == ''){
				cuowu.innerHTML = '验证码不能为空';
				return;
			}
			else if(yzNumber.value != code.innerHTML){
				cuowu.innerHTML = '验证码错误';
				return;
			}else{
				cuowu.innerHTML = '';
			}
		}

		//邮箱
		emailNumber.onfocus = ()=>{
			if(emailNumber.value.trim() == ''){
				return;
			}
			if(!/^[a-z][\w\-\.]{5,17}@[a-z0-9\-]{2,}(\.[a-z]{2,}){1,2}$/.test(emailNumber.value)){
				return;
			}
		}

		//非空验证
		btnRegist.onclick = ()=>{
			var _username = username.value;
			var _password = password.value;
			var _phoneNumber = phoneNumber.value;
			var _emailNumber = emailNumber.value;

			if(username.value.trim() == ''){
				yhm.children[0].style.display = 'block';
				return;
			}else if(password.value.trim() == ''){
				mm.children[0].style.display = 'block';
				return;
			}else if(confirmPassword.value.trim() == ''){
				qrmm.children[0].style.display = 'block';
				return;
			}else if(confirmPassword.value != password.value){
				return;
			}else if(phoneNumber.value.trim() == ''){
				sjh.children[0].style.display = 'block';
				return;
			}
			
			if(yzNumber.value.trim() == ''){
				cuowu.innerHTML = '验证码不能为空';
				return;
			}
			if(yzNumber.value != code.innerHTML){
				cuowu.innerHTML = '验证码错误';
				return;
			}
			// if(emailNumber.value.trim() == ''){
			// 	return;
			// }
			if(!/^[a-z][\w\-\.]{5,17}@[a-z0-9\-]{2,}(\.[a-z]{2,}){1,2}$/.test(emailNumber.value)){
				return;
			}
			if(!xuanze.checked){
				return;
			};

			$.ajax({
				url:'../api/mysql/zhuce.php',
				data:{
					username:_username,
					password:_password,
					phone:_phoneNumber,
					email:_emailNumber
				},
				success:function(data){
					if(data == 'fail'){
						$('.result').text('用户名已经存在');
						return;
					}
					$('.result').text('注册成功,马上去登陆');
					setTimeout(()=>{
						location.href = 'login.html';
					},2000);
				}
			})
			
		}
		//----注册部分结束----------
	});
}();