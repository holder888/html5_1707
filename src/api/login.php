<?php
	//获取前端传过来的数据
	$username = isset($_GET['username']) ? $_GET['username'] : Null;
	$password = isset($_GET['password']) ? $_GET['password'] : Null;

	//文件地址
	$path = './data/login.json';

	//打开文件
	$file = fopen($path,'r');

	//读取文件内容
	$content = fread($file,filesize($path));

	//把json字符串转换成数组
	$data = json_decode($content,true);

	//遍历数组
	//判断前端传递过来的用户名密码是否和数据库中的一致
	for($i=0;$i<count($data);$i++){
		// var_dump($data[$i]);
		if($username != $data[$i]['username'] && $password != $data[$i]['password']){
			echo "no";
			break;
		}else{
			echo "yes";
			break;
		}
	}
?>