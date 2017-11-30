// oslt.js
// author：七八个星天怪
// LICENSE：MIT

'use strict';
(function (f) {
    if (typeof module === "object" && typeof module.exports === "object"){
        module.exports = f
    }
    else{
        window.oslt = f
    }
})(function (el,bxy,exy,time,callback) {
    //state = init | running | pause | finish
    function draw(v,current) {
        v.style.left = current[0] + 'px';
        v.style.top = current[1] + 'px';
    }

    this.el = el;
    this.begin = [bxy[0],bxy[1]];
    this.end = [exy[0],exy[1]];
    this.value = [bxy[0],bxy[1]];
    this.time = time;
    this.state = 'init';
    var runCallback = null;
    var _n = Math.ceil(this.time * 60 / 1000);
    var n = _n;
    var stepX = (exy[0] - bxy[0]) / n;
    var stepY = (exy[1] - bxy[1]) / n;
    var _this = this;
    function change() {
        if(_this.state === 'running'){
            n--;
            _this.value[0] += stepX;
            _this.value[1] += stepY;
            if(n>0){
                if(n===1){
                    _this.value = _this.end;
                }
                draw(el,_this.value);
                runCallback && runCallback(_this.value);
                requestAnimationFrame(change);
            }
            else{
                _this.state = 'finish';
                callback && callback();
            }
        }
    }
    this.run = function (_callback) {
        if(this.state === 'init' || this.state === 'pause'){
            this.state = 'running';
            runCallback = _callback?_callback:null;
            requestAnimationFrame(change);
        }
    };
    this.pause = function () {
        if(this.state === 'running'){
            this.state = 'pause';
        }
    };
    this.reset = function () {
        if(this.state != 'init'){
            this.state = 'init';
            this.value[0] = bxy[0];
            this.value[1] = bxy[1];
            n = _n;
            draw(el,_this.value);
        }
    };
})
