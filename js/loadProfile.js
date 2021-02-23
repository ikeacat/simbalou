function unknownDog() {
    document.getElementById('profstamp').innerHTML = '<h4 style="color: red;" roboto>No recognizable dog was specified in the url. Click the header to go back to the homepage.</h4>'
}

window.onload = function() {
    if(window.location.href.includes('?dog=')) {
        if(window.location.href.includes('?dog=nala')) {
            console.log('nala');
            // Input the profile pic.
            document.getElementById('dog-name-under').innerHTML = 'Nala';
            document.getElementsByClassName('placeholdimg')[0].src = 'img/profpics/nala.jpg';
        } else if(window.location.href.includes('?dog=major')) {
            console.log('majey');
            // Input the profile pic.
            document.getElementById('dog-name-under').innerHTML = 'Major';
            document.getElementsByClassName('placeholdimg')[0].src = 'img/profpics/major.jpg';
        } else if(window.location.href.includes('?dog=simba')) {
            console.log('simbey')
            // Input the profile pic.
            document.getElementById('dog-name-under').innerHTML = 'Simba'
            document.getElementsByClassName('placeholdimg')[0].src = 'img/profpics/simba.jpg';
        } else {
            console.error('Unrecognized dog.')
            unknownDog();
        }
    } else {
        console.error('Specify a dog.')
        unknownDog();
    }
}