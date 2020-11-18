$('.about2').click(function(){
    $('.about2').animate({
        transform: 'rotate3d(1, 1, 1, 1rad);'
    },);
    // if (this.classList.contains('active')) {
    //     $('.about5').show();
    //     $('.about2').removeClass('active');
    // } else {
        // $('.about1').hide();
    //     $('.about2').addClass('active');
    // }
});

// $('.about3').click(function(){});
// $('.about4').click(function(){});

let email = "rudtjs4540@gmail.com";
document.querySelector("#icon_mail").addEventListener("click", function () {
    var emailCopy = document.createElement('textarea');
    emailCopy.value = email;
    document.body.appendChild(emailCopy);
    emailCopy.select();
    alert(email + "\n메일이 복사되었습니다.")
    document.execCommand("copy");
    document.body.removeChild(emailCopy);
});


let nameIp = document.getElementById('nameIp')
let emailIp = document.getElementById('emailIp')
let message = document.getElementById('message');
let submit = document.getElementById('submit')
let sbmSpan = document.getElementById('sbmUnder')
let nameLength = 0;
let emailLength = 0;
let msgLength = 0;




nameIp.addEventListener("change", e=>{
    nameLength = nameIp.value.length; 
    checkForm();
})
emailIp.addEventListener("change", e=>{
    emailLength = emailIp.value.length;
    // console.log(nameLength);
    checkForm();
})

$("#message").on("change", e=>{
    msgLength = message.value.length;
    checkForm();
})
// console.log(messageLength);


