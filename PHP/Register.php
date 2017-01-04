<?php
	$servername = "localhost";
	$sqlname = "root";
	$sqlpassword = "password";
	$dbname = "party";

	//获取表单提交数据
	$Uname = $_POST["username"];
	$Headicon = $_POST["headicon"];
	$Pword = $_POST["password"];
	$Newpword = $_POST["newpassword"];
	$Sex = $_POST["sex"];
	$Age = $_POST["age"];
	$Phone = $_POST["phone"];
	$Profession = $_POST["profession"];
	$Interest = $_POST["interest"];
	$Remark = $_POST["remark"];
	$IsMe = $_POST["isMe"];
	

	//连接mysql
	$conn = new mysqli($servername,$sqlname,$sqlpassword,$dbname);

	//检测连接
	if ($conn->connect_error)
	{
		die("Fail connect: " . $conn->connect_error);
	}
	
	//插入语句
	$sql = "INSERT INTO LOGIN_INFO VALUE";