
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