/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 16-12-13
 * Time: 上午10:33
 * To change this template use File | Settings | File Templates.
 */

document.write("js File");
function myFormValue(){

    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["pword"].value;
    //alert(x);
    //alert(y);
    var xmlhttp;
    if(window.XMLHttpRequest)
    {
        //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        //IE6,IE5浏览器执行代码
        xmlhttp = new ActiveXObject("Micrsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    }
    //xmlhttp.open("post","index.php?name"+x+"?password"+y,true); //取消缓存结果
    xmlhttp.open("post","index.php?name" + x,true);
    xmlhttp.send();

}