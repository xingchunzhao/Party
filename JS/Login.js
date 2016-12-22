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
    for(var i = 1; i <= links_len; i++)
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
        document.getElementById("hidfTagHistory").value = cursel;
    }
}