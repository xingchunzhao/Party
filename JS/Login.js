/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 16-12-21
 * Time: 下午3:02
 * To change this template use File | Settings | File Templates.
 */
function myRegister()
{
    window.location.href = "Register.html";
}
function myLogin()
{}

//控制操作tab的高亮显示 参数(one,索引号：1开始)
function setTable(name, cursel)
{
    for(var i = 1; i <= 2; i++)
    {
        var menu = document.getElementById(name + i);
        var menudiv = document.getElementById("con_" + name + "_" + i);
        if(i == cursel)
        {
            menu.className = "off";
            menudiv.style.display = "block";
        }
        else
        {
            menu.className = "";
            menudiv.style.display = "none";
        }
        //document.getElementById("hidfTagHistory").value = cursel;
    }
}

function changeTable(cursel)
{

    if(cursel == 2)
    {
        document.getElementById("con_2").style.display = "none";
        document.getElementById("con_1").style.display = "block";
        document.getElementById("con_2").className = "off";
    }
    else
    {
        document.getElementById("con_2").style.display = "block";
        document.getElementById("con_1").style.display = "none";
        document.getElementById("con_1").className = "off";
    }
}
