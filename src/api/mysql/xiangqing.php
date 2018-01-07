<?php
	include 'connect.php';
	
	$id = isset($_GET['id']) ? $_GET['id'] : Null;

	$sql = "select * from `goods2`";
	$result = $conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);

	// $row = json_encode($row,JSON_UNESCAPED_UNICODE); 
	// echo $row;

	
	$res;
	//遍历数组
	for($i=0;$i<count($row);$i++){
		//如果数组里面某一项的id等于前端传过来的id就把它所对应的信息返回给前端
		if($row[$i]['id'] == $id){
			$res = $row[$i];
			echo json_encode($res);
			break;
		}
	}
?>