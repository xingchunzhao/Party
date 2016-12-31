<?php
	$servername = "localhost";
	$sqlname = "root";
	$sqlpassword = "password";
	$dbname = "party";
	
	//获取表单提交数据
	$Uname = $_POST["username"];
	$Pword = $_POST["password"];
	
	echo $_POST["username"] . "<br>";
	echo $_POST["password"] . "<br>";
	
	//连接mysql
	$conn = new mysqli($servername,$sqlname,$sqlpassword,$dbname);
	
	//检测连接
	if ($conn->connect_error)
	{
		die("Fail connect: " . $conn->connect_error);
	}
	
	//sql查询
	$sql = "SELECT * FROM LOGIN_INFO WHERE username = '$Uname' and password = '$Pword'";
	
	//sql查询结果
	$result = $conn->query($sql);
	
	//检测查询结果
	if ($result->num_rows > 0)
	{
		echo "登录成功";
	}
	else
	{
		echo "用户名或者密码错误";
	}