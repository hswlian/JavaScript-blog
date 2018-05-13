var $main = document.getElementsByClassName('g-main')[0],
    $btn = document.getElementsByClassName('btn')[0];
var resetCss={
    add:function(){
        $main.style.animation = 'color 1s ease alternate';
        $main.classList.add('add');
    },
    remove:function(){
        $main.style.animation='';
        $main.classList.remove('add');
    },
    init:function(){
        var self = this
        this.add();
        setTimeout(function(){
            self.remove();
        },1000);
    }
}
$btn.addEventListener('click',function(){
    resetCss.init();
})