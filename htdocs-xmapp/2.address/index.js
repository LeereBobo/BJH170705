function ajax(url, fn) {
	var request = new XMLHttpRequest();
	request.open("get", url);
	request.send();
	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if (fn) {
				fn(this.responseText);
			}
		}
	}
}

//元素创建函数
function create(name,father,classname) {
    var w = document.createElement(name);
    father.appendChild(w);
    w.className = classname;
    return w;
}