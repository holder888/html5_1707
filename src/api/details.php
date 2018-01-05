<?php
	// echo "hello";
	//获取前端传过来的id，判断是否有传，没传给空
	$id = isset($_GET['id']) ? $_GET['id'] : Null;

	//json文件路径
	$filr_url = './data/list_goods.json';

	//打开文件
	$myfile = fopen($filr_url,'r');

	//读取打开的文件
	$content = fread($myfile,filesize($filr_url));

	//把读取到的内容转成数组
	$arr_data = json_decode($content,true);
	// var_dump($arr_data);

	$res;
	//遍历数组
	for($i=0;$i<count($arr_data);$i++){
		//如果数组里面某一项的id等于前端传过来的id就把它所对应的信息返回给前端
		if($arr_data[$i]['id'] == $id){
			$res = $arr_data[$i];
			echo json_encode($res);
			break;
		}
	}

	// 关闭文件
	fclose($myfile);
?>