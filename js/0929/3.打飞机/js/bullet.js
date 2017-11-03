function CreateElement(obj) {
    this.array = [];
    this.memoryArray = [];
    this.crashArr = []; // 正在消失的所有的敌机
    this.cx = obj.cx;
    this.cy = obj.cy;
    this.vy = obj.vy;
    this.num = obj.num;
    this.img = obj.img;
    this.chaochufanwei = obj.aaaa;
    this.create = function() {
        var temp = this;
        this.timer = setInterval(function() {
            if (!temp.judgeMemory()) {
                console.log("创建");
                var a = new HeroFly({
                    img: temp.img,
                    canvas: $("#canvas"),
                    num: temp.num,
                    cx: temp.cx,
                    cy: temp.cy,
                    vy: temp.vy
                });
                temp.array.push(a);
            }
        }, obj.duration);
    }
    this.judgeMemory = function() {
        if (this.memoryArray.length > 0) {
            var b = this.memoryArray[0];
            b.cx = this.cx;
            b.cy = this.cy;
            this.memoryArray.shift();
            var index = this.array.indexOf(b);
            if (index == -1) {
                this.array.push(b);
            }

            return true;
        }
        return false;
    }
    this.beginCrash = function() {
        var bulletObj = this;
        for (var i = 0; i < this.crashArr.length; i++) {
            this.crashArr[i].crash(function() {
                this.sx = 0;
                var memoryIndex = bulletObj.memoryArray.indexOf(
                    this);
                if (memoryIndex <= -1) {
                    bulletObj.memoryArray.push(this);
                }
                var index = bulletObj.crashArr.indexOf(this);
                bulletObj.crashArr.splice(index, 1);
            })
        }
    }
    this.refresh = function() {
        for (var i = 0; i < this.crashArr.length; i++) {
            this.crashArr[i].drawFly();
        }
        for (var i = 0; i < this.array.length; i++) {
            this.array[i].drawFly();
            if (!(this.array[i].cy > -this.array[i].imgHeight && this.array[
                    i].cy < this.array[i].canvas.height)) {
                this.memoryArray.push(this.array[i]);
                this.array.splice(i, 1);
                i--;
            }
        }
    }
    this.create();
}
