function switchMode() {
    var currMode = localStorage.getItem('colorMode');
    if(currMode == 'light') {
        localStorage.setItem('colorMode', 'dark');
        document.head.innerHTML += ('<link href="css/darkmode.css" rel="stylesheet" />');
        document.getElementById('modelink').innerHTML = 'Light Mode';
    } else {
        localStorage.setItem('colorMode', 'light');
        var getTag = document.querySelector('link[href="css/darkmode.css"]');
        document.head.removeChild(getTag);
        document.getElementById('modelink').innerHTML = 'Dark Mode';
    }
}

window.onload = function() {
    var currMode = localStorage.getItem('colorMode');
    var page = document.querySelector('meta[name="sl_page"]').content;
    if(currMode == 'dark') {
        document.head.innerHTML += ('<link href="css/darkmode.css" rel="stylesheet" />');
        if(page == 'home') {
            document.getElementById('modelink').innerHTML = 'Light Mode';
        }
    } else {
        if(page == 'home') {
            document.getElementById('modelink').innerHTML = 'Dark Mode';
        }
    }
    if(page == 'images') {
        imagePageLoader();
    }
}