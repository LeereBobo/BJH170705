<?php 

	fuction selectData($sql){
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
	$sql = "SELECT * FROM customer";
	selectData($sql);




 ?>