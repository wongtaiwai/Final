var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}


var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value==""||mm.value==""){
        alert("賬號或密碼不能為空");
        return false;
    }
    else if(zh.value!="123"||mm.value!="123456"){    
        alert("賬號或密碼錯誤(可以選擇游客登錄)");
        return false;
    }
}

var con=document.getElementById('con')
function loadoff(){
    con.style.display="none";
}
function loadon(){
    con.style.display="flex";
}
window.onload=function(){
    loadon();
    setTimeout(loadoff,3000);
}

