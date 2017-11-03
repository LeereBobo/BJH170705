function Circle(obj) {
    this.canvas = obj.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.data = obj.data;
    this.perScale = 0;
    this.radius = obj.radius;
    this.scaleFn = function() {
        var allValue = 0;
        for (var i = 0; i < this.data.length; i++) {
            allValue += this.data[i].value;
        }
        this.perScale = 360 / allValue;
    }
    this.drawCircle = function(begin_deg, end_deg, color) {
        var deg = Math.PI / 180;
        var x = this.canvas.width / 2;
        var y = this.canvas.height / 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.arc(x, y, this.radius, begin_deg * deg, end_deg * deg);
        this.ctx.fillStyle = color;
        this.ctx.fill();
        this.ctx.closePath();
    }
    this.beginDraw = function() {
        this.scaleFn();
        // 0: 0,43,
        // 1: 43,63
        var lastValue = 0;
        for (var i = 0; i < this.data.length; i++) {
            var deg = this.data[i].value * this.perScale;
            this.drawCircle(lastValue, deg + lastValue, this.data[i].color);
            lastValue = deg + lastValue;
        }
    }
    this.beginDraw();
}
