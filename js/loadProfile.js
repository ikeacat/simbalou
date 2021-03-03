const nalaImages = 11;
const majorImages = 10;
const simbaImages = 11;
const jaxImages = 4;

function unknownDog() {
    document.getElementById('profstamp').innerHTML = '<h4 style="color: red;" roboto>No recognizable pet was specified in the url. Click the header to go back to the homepage.</h4>'
}

function doPhotos(dog) {
    var imagePath;
    var amntOfImages;
    if(dog == 'nala') {
        imagePath = 'img/nala/';
        amntOfImages = nalaImages;
    } else if(dog == 'simba') {
        imagePath = 'img/simba/';
        amntOfImages = simbaImages;
    } else if(dog == 'major') {
        imagePath = 'img/major/';
        amntOfImages = majorImages;
    } else if(dog == 'jax') {
        imagePath = 'img/jax/';
        amntOfImages = jaxImages;
    }
    var i;
    for(i = 0; i <= amntOfImages - 1; i++) {
        if(i == 0) {
            document.getElementById('picshere').innerHTML += '<div class="dogpic" first><img src="' + imagePath + '1.jpg"></div>'
        } else {
            var imageNum = i + 1;
            imageNum = imageNum.toString();
            document.getElementById('picshere').innerHTML += '<div class="dogpic"><img src="' + imagePath + imageNum + '.jpg"></div>'
        }
    }
}

window.onload = function() {
    if(window.location.href.includes('?dog=')) {
        if(window.location.href.includes('?dog=nala')) {
            console.log('nala');
            // Input the profile pic.
            document.getElementById('dog-name-under').innerHTML = 'Nala';
            document.getElementsByClassName('placeholdimg')[0].src = 'img/profpics/nala.jpg';
            doPhotos('nala');
            document.title = 'Nala = Life';
        } else if(window.location.href.includes('?dog=major')) {
            console.log('majey');
            // Input the profile pic.
            document.getElementById('dog-name-under').innerHTML = 'Major';
            document.getElementsByClassName('placeholdimg')[0].src = 'img/profpics/major.jpg';
            doPhotos('major');
            document.title = 'Major = Life'
        } else if(window.location.href.includes('?dog=simba')) {
            console.log('simbey')
            // Input the profile pic.
            document.getElementById('dog-name-under').innerHTML = 'Simba'
            document.getElementsByClassName('placeholdimg')[0].src = 'img/profpics/simba.jpg';
            doPhotos('simba');
            document.title = 'Simba = Life'
        } else if(window.location.href.includes('?dog=jax')) {
            console.log('jaxy poo')
            // Input the profile pic.
            document.getElementById('dog-name-under').innerHTML = 'Jax'
            document.getElementsByClassName('placeholdimg')[0].src = 'img/profpics/jax.png';
            doPhotos('jax');
            document.title = 'Jax = Life'
        } else {
            console.error('Unrecognized pet.')
            unknownDog();
        }
    } else {
        console.error('Specify a pet.')
        unknownDog();
    }
}
