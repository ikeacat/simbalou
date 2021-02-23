window.onload = function() {
    if(window.location.href.includes('?dog=')) {
        if(window.location.href.includes('?dog=nala')) {
            console.log('nala');
            // Input the profile page.
            //document.getElementById('profstamp').innerHTML = ''
        } else if(window.location.href.includes('?dog=major')) {
            console.log('majey');
        } else if(window.location.href.includes('?dog=simba')) {
            console.log('simbey')
        } else {
            console.error('Unrecognized dog.')
        }
    } else {
        console.error('Specify a dog.')
    }
}