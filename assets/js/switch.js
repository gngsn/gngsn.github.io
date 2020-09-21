$(document).ready(function () {
    var nav = $("#switch");
    var turnOn = false;
    var audio = new Audio('/assets/img/switch.mp3');

    nav.click(function (e) {
        audio.play();
        if (!turnOn) {
            document.getElementById('f-text').innerHTML = '<em>ON/</em>OFF';
            document.getElementById('s-text').innerHTML = '어울릴 땐, <br/><em>최고의 화합을</em>';
            this.src = "/assets/img/switch-on.png";
            $("body").addClass('dark');
            document.querySelector('.switch img').classList.add('on');
        } else {
            document.getElementById('f-text').innerHTML = 'ON<em>/OFF</em>';
            document.getElementById('s-text').innerHTML = '개발할 땐, <br/><em>깊은 집중을 </em>';
            this.src = "/assets/img/switch-off.png";
            $("body").removeClass('dark');
            document.querySelector('.switch img').classList.remove('on');
        }
        turnOn = !turnOn;
    });
});