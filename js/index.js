/*var wei = document.getElementById("weixin");
var div1 = document.getElementById('div1');
var weix = document.getElementById('weix');
var one = document.getElementsByClassName('one');
wei.onmousemove = function() {
	one[0].style.display = 'block';
    div1.style.display = 'block';
}
wei.onmouseout=function(){
	one[0].style.display = 'none';
    div1.style.display = 'none';
}
*/
var wei = document.getElementById("weixin");
wei.onmousemove = function(a1) {
	a1.style.backgroundImage="url(img/fo_15.png)";
    div1.style.display = 'block';
}
wei.onmouseout=function(){
	a1.style.display = 'none';
    div1.style.display = 'none';
}

