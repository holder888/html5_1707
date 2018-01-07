<?php
	include 'connect.php';

	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

	$sql = "select * from `goods2`";
	$result = $conn->query($sql);

	$row = $result->fetch_all(MYSQLI_ASSOC);

	// $row = json_encode($row,JSON_UNESCAPED_UNICODE); 
	// echo $row;

	
	// 根据分页截取数据
	$res = array(
		'data'=>array_slice($row, ($page_no-1)*$qty,$qty),
		'total'=>count($row),
		'qty'=>$qty
	);

	// 输出json字符串
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>