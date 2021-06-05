function switchMode() {
    var currMode = localStorage.getItem('colorMode');
    if(currMode == 'light') {
        localStorage.setItem('colorMode', 'dark');
        document.head.innerHTML += ('<link href="sass/dist/darkmode.css" rel="stylesheet" />');
        document.getElementById('modelink').innerHTML = 'Light Mode';
    } else {
        localStorage.setItem('colorMode', 'light');
        var getTag = document.querySelector('link[href="sass/dist/darkmode.css"]');
        document.head.removeChild(getTag);
        document.getElementById('modelink').innerHTML = 'Dark Mode';
    }
}

window.onload = function() {
    var currMode = localStorage.getItem('colorMode');
    var page = document.querySelector('meta[name="sl_page"]').content;
    if(currMode == 'dark') {
        document.head.innerHTML += ('<link href="sass/dist/darkmode.css" rel="stylesheet" />');
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

    // Konami Code stuff.

    if(document.cookie.match('francais=true')) {
        document.getElementsByClassName('title')[0].innerHTML = "Nos animaux domestiques sont notre vie.";
    } else {
        var konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight','ArrowLeft','ArrowRight','b','a'];
        var knCurrent = 0;

        var kcHandler = function (ev) {
            if(konamiPattern.indexOf(ev.key) < 0 || ev.key !== konamiPattern[knCurrent]) {
                knCurrent = 0;
                return;
            }

            knCurrent++;

            if(konamiPattern.length == knCurrent) {
                var theDate = new Date();
                theDate.setTime(theDate.getTime() + (1*24*60*60*1000));
                var newexp = "expires=" + theDate.toUTCString();
                document.cookie = 'francais=true;' + newexp + ";SameSite=Strict;path=/"; // make sure it expires tomorrow.
                document.getElementsByClassName('title')[0].innerHTML = "Nos animaux domestiques sont notre vie.";
            }

            console.log('Konami Status: ' + knCurrent.toString());
        }

        document.addEventListener('keydown', kcHandler, false);
    }
}