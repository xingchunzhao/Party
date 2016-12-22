/**
 * Created with PyCharm.
 * User: Administrator
 * Date: 16-12-19
 * Time: обнГ3:44
 * To change this template use File | Settings | File Templates.
 */
function myCan()
{
    //document.write("Function()");
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    var grd = cxt.createLinearGradient(0,0,175,75);
    grd.addColorStop(0,"FF0000");
    grd.addColorStop(1,"00FF00");
    cxt.fillStyle = grd;
    cxt.fillRect(0,0,175,75);
}
function myImage()
{
    var c = document.getElementById("myImage");
    var cxt = c.getContext("2d");
    var  img = new Image();
    img.src = "jk.png";
    cxt.drawImage(img,0,0);
}