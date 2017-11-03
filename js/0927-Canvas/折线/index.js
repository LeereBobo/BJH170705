function Draw(myarr,canvas,obj){
    var ctx = canvas.getContext('2d');
    this.ctxWidth = canvas.width;
    this.ctxHeight = canvas.height;
    this.points = [];
    this.mk = 0;
    
    //画坐标系
    this.drawPiex = function(){
    	ctx.beginPath();
    	ctx.moveTo(100,100);
    	ctx.lineTo(100,this.ctxHeight - 100);
    	ctx.lineTo(this.ctxWidth - 100,this.ctxHeight - 100);
    	ctx.moveTo(90,110);
    	ctx.lineTo(100,100);
    	ctx.lineTo(110,110)
    	ctx.moveTo(this.ctxWidth - 110,this.ctxHeight - 110);
    	ctx.lineTo(this.ctxWidth - 100,this.ctxHeight - 100);
    	ctx.lineTo(this.ctxWidth - 110,this.ctxHeight - 90);
    	ctx.stroke();
    	ctx.closePath();
    }

    this.drawPoint = function(){
        var length = myarr.length;
        var x_dis = this.ctxWidth - 100 -100 - 10; 
        var per_x = x_dis / length;
        var y_dis = this.ctxHeight - 100 -100 -10;
        var per_y = y_dis / this.getMax();
        for (var i = 0; i < myarr.length; i++) {
        	var x = (i + 1) * per_x + 100;
        	var y = this.ctxHeight - per_y * myarr[i].value -100;
        	var p = new Point(x,y);
        	this.points.push(p);
        }
        this.beginDrawPoint();
        
        //调用线条函数
        this.mk = Math.ceil(x_dis / obj.add);
        this.drawLine();
        this.drawheng();
        this.fontX ();
    }
    //x字
    this.fontX = function(){
    	ctx.beginPath();
    	ctx.strokeStyle = 'tomato';
    	ctx.font = '25px SimSun';
    	for (var i = 0; i < this.points.length; i++) {
    		 ctx.strokeText(myarr[i].name,this.points[i].x,this.ctxHeight - 50)
    	}
    	ctx.closePath();
    }

    //画线(竖线)
    this.drawLine = function(){
    	ctx.beginPath();
    	for (var i = 0; i < this.mk; i++) {
    		ctx.moveTo(obj.add * (i+1) + 100,this.ctxHeight - 100);
    		ctx.lineTo(obj.add * (i+1) + 100,100);
    	}
    	ctx.strokeStyle = obj.coloradd;
    	ctx.lineWidth = obj.Widthadd;
    	ctx.stroke();
    	ctx.closePath();
    }
    //画线(横线)
    this.drawheng = function(){
    	ctx.beginPath();
    	for (var i = 0; i < this.mk; i++) {
    		ctx.moveTo(100,this.ctxHeight - (obj.add * (i+1) + 100));
    		ctx.lineTo(this.ctxWidth - 100,this.ctxHeight - (obj.add * (i+1) + 100) );
    	}
    	ctx.strokeStyle = obj.coloradd;
    	ctx.lineWidth = obj.Widthadd;
    	ctx.stroke();
    	ctx.closePath();
    }

    //画折线图
    this.beginDrawPoint = function(){
    	ctx.beginPath();
    	ctx.moveTo(this.points[0].x,this.points[0].y);
    	for (var i = 1; i < this.points.length; i++) {
    		 ctx.lineTo(this.points[i].x,this.points[i].y);
    	}
    	ctx.strokeStyle = obj.color;
    	ctx.lineWidth = obj.lineWidth;
    	ctx.stroke();
    	ctx.closePath();
    }
    
    //获得y轴最高点
    this.getMax = function(){
        var max = 0;
        for (var i = 0; i < myarr.length; i++) {
        	 if (myarr[i].value > max) {
        	 	max = myarr[i].value;
        	 }
        }
        return max;
    }

}
//折线坐标
function Point(x,y){
	this.x = x;
	this.y = y;
}












