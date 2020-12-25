$(document).ready(function () { 
    setDarkMode();

    theme = getUrlParameters().th;
    var selfieImg = document.getElementById('selfie');
    var midImage = document.getElementById('midImage');
    var about = document.getElementById('about');
    var project = document.getElementById('project');
    var home = document.getElementById('home');
    var darkMode = document.getElementById('dark-mode');

    if( theme === 'd') {
        $("body").addClass('dark');
        if(selfieImg !== null){
            selfieImg.src = "https://user-images.githubusercontent.com/43839834/92443328-52af0880-f1ec-11ea-80f4-770e8600d067.png";
            midImage.src = "assets/img/working.png";
        }
        about.href = "/about?th=d";
        project.href = "/project?th=d";
        home.href = "/?th=d";
        if(darkMode !== null){
            darkMode.checked = true;
        }
    } else if( theme === 'y') {
        $("body").addClass('y');
        if(selfieImg !== null){
            selfieImg.src = "assets/img/selfie-white.png";
        }
        about.href = "/about?th=y";
        project.href = "/project?th=y";
        home.href = "/?th=y";
    } else {
        if(selfieImg !== null){
            selfieImg.src = "assets/img/selfie-white.png";
            midImage.src = "assets/img/working.jpg";
        }
    }
});

function getUrlParameters() {
    var params = {};
    if (location.search) {
        var parts = location.search.substring(1).split('&');

        for (var i = 0; i < parts.length; i++) {
            var nv = parts[i].split('=');
            if (!nv[0]) continue;
            params[nv[0]] = nv[1] || true;
        }
    }
    return params;
}

const setDarkMode = () => {
    var contDiv = document.createElement( 'div' );
    var subDiv = document.createElement( 'div' );
    var label = document.createElement( 'label' );
    var input = document.createElement( 'input' );
    var span = document.createElement( 'span' );
    
    contDiv.className = 'dark-mode';
    label.className = 'sw';
    span.className = 'slider round';
    input.setAttribute('id', 'dark-mode');
    input.setAttribute('type', 'checkbox');

    contDiv.appendChild(subDiv);
    subDiv.appendChild(label);
    label.appendChild(input);
    label.appendChild(span);
    
    document.body.appendChild(contDiv);

    input.addEventListener("click", e=>{
        let route = location.origin + location.pathname;
        let checked = e.target.checked;
        if(checked) {
            $("body").addClass('dark');
            window.location.href = route+"?th=d";
        } else {
            window.location.href= route;
            $("body").removeClass('dark');
        }
    });
}