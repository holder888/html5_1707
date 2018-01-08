<?php
	include 'connect.php';

	$username = isset($_GET['username']) ? $_GET['username'] : Null;
	$password = isset($_GET['password']) ? $_GET['password'] : '123456';
	$phone = isset($_GET['phone']) ? $_GET['phone'] : Null;
	$email = isset($_GET['email']) ? $_GET['email'] : Null;

	//查看用户名是否已经存在
	$sql = "select username from user where username='$username'";
	$result = $conn->query($sql);
	if($result->num_rows>0){
		echo "fail";
	}else{
		// 密码md5加密
		$password = md5($password);

		$sql = "insert into user (username,password,phone,email) values('$username','$password','$phone','$email')";

		// 获取查询结果
		$result = $conn->query($sql);

		if ($result) {
		    echo "ok";
		} else {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
?>