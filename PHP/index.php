<?php
    $servernname = "localhost";
    $sqlname = "root";
    $sqlpassword = "password";
    $dbname = "csvt";

    //获取数据
    $Name = $_POST["Name"];
    $Pword = $_POST["Pword"];
    echo "input name: " . "$Name <br>";

    //连接数据库
    $conn = new mysqli($servername, $sqlname, $sqlpassword, $dbname);

    //检测连接
    if ($conn->connect_error)
    {
        die("Fail connection: " . $conn->connect_error);
    }
    //$sql = "SELECT * FROM LOGIN WHERE usename = 'John' and password = '123'";
    $sql = "SELECT * FROM LOGIN WHERE usename = '$Name' and password = '$Pword'";
    echo $sql;
    $result = $conn->query($sql);

    if($result->num_rows > 0)
    {
        while($row = $result->fetch_assoc())
        {
            echo "<br> name: " . $row["usename"];
            echo "<br>password: " . $row["password"];
        }
    }
    else
    {
        echo "input error!";
    }
?>