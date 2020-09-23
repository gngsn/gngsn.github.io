$(document).ready(function () { 
    theme = getUrlParameters().th;
    var selfieImg = document.getElementById('selfie');
    var midImage = document.getElementById('midImage');
    var about = document.getElementById('about');
    var project = document.getElementById('project');
    var home = document.getElementById('home');
    var darkMode = document.getElementById('dark-mode');
    
    if( theme === 'd') {
        $("body").addClass('dark');
        selfieImg.src = "https://user-images.githubusercontent.com/43839834/92443328-52af0880-f1ec-11ea-80f4-770e8600d067.png";
        midImage.src = "assets/img/working.png";
        about.href = "/about?th=d";
        project.href = "/project?th=d";
        home.href = "/?th=d";
        darkMode.checked = true;
    } else if( theme === 'y') {
        $("body").addClass('y');
        about.href = "/about?th=y";
        project.href = "/project?th=y";
        home.href = "/?th=y";
    } else {
        selfieImg.src = "assets/img/selfie-white.png"; 
        midImage.src = "assets/img/working.jpg";
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