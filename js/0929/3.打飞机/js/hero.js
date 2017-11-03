var canvas = $("#canvas");

// img
// canvas
function HeroFly(obj) {
    this.ctx = obj.canvas[0].getContext("2d");
    this.heroImg = obj.img;
    this.canvas = obj.canvas[0];
    this.num = obj.num;
    this.imgWidth = this.heroImg.width / obj.num;
    this.imgHeight = this.heroImg.height;
    this.autoRefresh = obj.autoRefresh ? obj.autoRefresh : false;
    this.sx = 0; // 裁剪图片的起始点
    this.sy = 0;
    this.cx = obj.cx;
    this.cy = obj.cy
    this.vx = 0;
    this.vy = obj.vy ? obj.vy : 0;
    this.drawFly = function() {
        // console.log(this);
        this.ctx.beginPath();
        this.cx += this.vx;
        this.cy += this.vy;
        this.ctx.drawImage(this.heroImg, this.sx, this.sy, this.imgWidth,
            this.imgHeight, this.cx, this.cy, this.imgWidth, this.imgHeight
        );
        this.ctx.closePath();
    }
    this.crash = function(fn) {
        var temp = this;
        var crashTimer = setInterval(function() {
            temp.sx += temp.imgWidth;
            if (temp.sx >= temp.imgWidth * (temp.num - 1)) {
                if (fn) {
                    fn.call(temp);
                }
                clearInterval(crashTimer);
            }
        }, 100);

    }
}
