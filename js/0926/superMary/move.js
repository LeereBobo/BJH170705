
function judgeBorder(son,father){
	if (son.offsetLeft <= 0) {
		son.style.left = 0;
	}
	if (son.offsetLeft > 500) {
		son.style.left = 500 + "px";
		changeBackPosition(father);

	}
}


function changeBackPosition(element){
	var a = getValue(element,"backgroundPosition");

	
	var value = a.replace(/px/g,"");
	var arr = value.split(" ");
	var v_x = Number(arr[0]);
	v_x -= 5;
	element.style.backgroundPosition = v_x + "px 0";
}
function getValue(element,key){
	if(element.currentStyle){
		return element.currentStyle[key];
	}else{
		return getComputedStyle(element,null)[key];
	}

}