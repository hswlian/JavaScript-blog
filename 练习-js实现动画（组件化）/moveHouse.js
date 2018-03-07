(function(win,doc){
    // 动态加载图片
    let MoveHouse = function(options){
        this.options = options;
        this.init();
    }

    MoveHouse.prototype = {
        init : function(){
            // 初始化参数
            this.options.bdbox = this.options.bdbox || '';
            this.options.imageArr = this.options.imageArr || [];
            this.options.speed = this.options.speed || 20;
            this.options.autoplay = this.options.autoplay || true;
            this.options.domType = this.options.domType || 'class';

            if(this.options.domType == 'class'){
                this.bdbox = document.getElementsByClassName(this.options.bdbox)[0];
            }else{
                this.bdbox = document.getElementById(this.options.bdbox);
            }
            this.imageList = this.options.imageArr.concat();

            let that=this;
            if(this.options.autoplay.toString() != 'true'){
                this.bdbox[this.options.autoplay] = function(){
                    that._loadImage();
                }
            }else{
                that._loadImage();
            }
        },
        play : function(){
            let i,self = this;
            let j=0;
            if(!self.options.speed){
                if(win.navigator.appCodeName == 'Mozilla'){
                    var move = function(){
                        self.bdbox.src = self.options.imageArr[j];
                        j < self.options.imageArr.length-1 ? j++ : j = 0;
                        window.requestAnimationFrame(move);
                    }
                    move();
                }
            }else{
                let housemove = setInterval(function(){
                    i <= self.options.imageArr.length ? self._changeSrcs(self.bdbox,self.options.imageArr,i++) : i = 1;
                    // }
                },self.options.speed);
            }
        },

        _loadImage : function(){
            let self = this;
            if(self.imageList.length != 0){
                let img =  new Image();
                img.onload = function(){
                    self._loadImage(this.imageList);
                }
                img.src = this.imageList.shift();
            }else{
                if(self.options.autoplay){
                    self.play();
                }
            }

        },
        // 修改src资源
        _changeSrcs:function(house,srcArr,i){
            house.src = srcArr[--i];
        }
    }

    window.MoveHouse = MoveHouse;
})(window,document);