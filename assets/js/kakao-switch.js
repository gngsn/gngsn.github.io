// document.getElementById('switch').click(function (e) {
//     console.log('click!');
//     this.src="../img/switch-on.png";
// });

$(document).ready(function () {
    var nav = $("#switch");
    var turnOn = false;
    var inner = $(".inner");
    var audio = new Audio('/assets/img/switch.mp3');

    nav.click(function (e) {
        console.log("turnOn : ", turnOn);
        audio.play();
        if (!turnOn) {
            document.getElementById('f-text').innerHTML = '<em>ON/</em>OFF';
            document.getElementById('s-text').innerHTML = '어울릴 땐, <em>최고의 화합을</em>';
            this.src = "/assets/img/switch-on.png";

            document.querySelector('.inner').style.backgroundColor = '#000';
            document.querySelector('.inner h1').style.color = '#fff';
            document.querySelector('.inner h3').style.color = '#fff';
            document.querySelector('.link span').style.borderTopColor = '#fff';
            document.querySelectorAll('.link')[0].style.borderBottomColor = '#fff';
            document.querySelectorAll('.link')[0].style.color = '#fff';
            document.querySelectorAll('.link')[1].style.color = '#fff';            
            document.getElementById('f-text').style.color = '#fff';
            document.getElementById('s-text').style.color = '#fff';
            document.querySelector('.switch img').classList.add('on');
        } else {
            document.getElementById('f-text').innerHTML = 'ON<em>/OFF</em>';
            document.getElementById('s-text').innerHTML = '개발할 땐, <em>깊은 집중을 </em>';
            this.src = "/assets/img/switch-off.png";


            document.querySelector('.inner').style.backgroundColor = '#F2F2F2';
            document.querySelector('.link span').style.borderTopColor = '#000';
            document.querySelector('.inner h1').style.color = '#000';
            document.getElementById('f-text').style.color = '#000';
            document.getElementById('s-text').style.color = '#000';
            document.querySelector('.inner h3').style.color = '#000';
            document.querySelectorAll('.link')[0].style.color = '#000';
            document.querySelectorAll('.link')[0].style.borderBottomColor = '#000';
            document.querySelectorAll('.link')[1].style.color = '#000';
            document.querySelector('.switch img').classList.remove('on');
        }
        turnOn = !turnOn;
    });
});