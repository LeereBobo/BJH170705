<?php 

	function selectData(){
		$mysqli = new mysqli("localhost","root","","people");
		$mysqli = query("set names utf8");
		$result = $mysqli->query($sql);
		if ($result->num_rows) {
			$data = $result->fetch_all(MYSQLI_ASSOC);
			echo json_encode($data);
		}else{
			echo 0;
		}
		$mysqli->close();
	}
	if (isset($_POST['key']) && isset(&_POST['value'])) {
		$key = $_POST['key'];
		$value = $_POST['value'];
		$sql = "SELECT * FROM customers WHERE ${key}='$value'";
	}
	selectData($sql);







 ?>