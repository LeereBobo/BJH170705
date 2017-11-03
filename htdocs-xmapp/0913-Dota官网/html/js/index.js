//元素创建函数
function create(name, father, classname) {
	var w = document.createElement(name);
	father.appendChild(w);
	w.className = classname;
	return w;
}

//二.通过ajax获得PHP中的json数据
function myAjax(url, fn) {
	var m = new XMLHttpRequest(); // 1.创建ajax
	m.open("get", url); // 2.配置请求路径和请求方式(get和post)
	m.send(); // 3.发送请求

	// 4.接收数据
	m.onreadystatechange = function() {
		// 网络请求成功并返回数据
		if (this.readyState == 4 && this.status == 200) {
			var str = this.responseText;
			fn(str);
		}
	}
}