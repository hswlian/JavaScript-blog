var ws = io.connect(),
    sendInfo = {
        userInfo:1,
        message:''
    },
    enterName;
function getUsername(){
    var $name = document.getElementsByClassName('name-submit')[0];
    var $pop = document.getElementsByClassName('pop')[0];
    $name.addEventListener('click',function(){
        enterName = document.getElementsByClassName('enterName')[0].value;
        sendInfo.userInfo = enterName;
        regName();
        $pop.style.display = 'none';
    });

}
function regName(){
    if(enterName !== 'huashuwen'){
        document.getElementsByClassName('j-username')[0].innerHTML = enterName;
        document.getElementsByClassName('j-username')[1].innerHTML = enterName;
    }else{
        return;
    }
}
function sendMessage() {
    var $submit = document.getElementsByClassName('btn-submit')[0];
    var $message = document.getElementsByClassName('message')[0];
    $submit.addEventListener('click',function(){
        sendInfo.message = $message.value;
        ws.emit('login',JSON.stringify(sendInfo));
        $message.value = '';
    });
}

function getMess(){
    var $panel = document.getElementsByClassName('g-panel')[0];
    ws.on('login',function(e){
        e = JSON.parse(e);
        var html ;
        if(e.userInfo === 'huashuwen'){
            var div = document.createElement("div");
            div.classList.add('user-left');
            div.innerHTML =  ' <img src="img/head.jpg" height="40" width="40"/>\n' +
                                '<span class="msg">' + e.message + '</span>\n' ;
            $panel.appendChild(div);
        }else{
            regName();
            var div = document.createElement("div");
            $message = '';
            div.classList.add('user-right');
            div.innerHTML =' <span class="msg">' + e.message + '</span>\n'+
                '<img src="img/user1.jpg" height="40" width="40"/>\n';
            $panel.appendChild(div);
        }
    });
}
getUsername();
sendMessage();
getMess();

/* 将用户信息存在sessionStorage */
sessionStorage.setItem(1,'user1');
