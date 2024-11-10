// function play(){
// //step1:-1 hide the home screen to hide the screen add the class hidden to the home section.
// const homesection = document.getElementById('home-screen');
// homesection.classList.add('hidden');
// // playground section
// const playgroundsection = document.getElementById('playground-section');
// playgroundsection.classList.remove('hidden');

// }
function handlekeybordbuttonpress(event){
    const playerpressed = event.key;
    console.log('playerpressed',playerpressed);
    // get expect to press
    const currentalphabateelement = document.getElementById('current-alphabate');
    const currentalphabate = currentalphabateelement.innerText;
    const exceptalpha = currentalphabate.toLowerCase();
    console.log(playerpressed, exceptalpha)
    // check correct or not
    if(playerpressed===exceptalpha){
        console.log('you are get a point');
        console.log('you have pressed courectly', exceptalpha);
        removebackgroundbyid(exceptalpha);
        continuegame();
    }
    else{
        console.log('you lost 1 point')
    }
}
document.addEventListener('keyup', handlekeybordbuttonpress)




// call function
function play(){
    hideelementbyid('home-screen')
    showelementbyid('playground-section')
    continuegame()
}




function continuegame(){
    const alphabat = getrandomindex();
    console.log('your random alphabte', alphabat);


// set random alphabate
const currentalphabateelement = document.getElementById('current-alphabate');
currentalphabateelement.innerText = alphabat;
// setbackground color
setbackgroundcolorbyid(alphabat)
}

// optional
function hideelementbyid(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('hidden');
}
function showelementbyid(elementid){
    const element = document.getElementById(elementid)
    element.classList.remove('hidden');
}

function setbackgroundcolorbyid(elementid){
    const element =document.getElementById(elementid);
    element.classList.add('bg-orange-400');}

function removebackgroundbyid(elementid){
    const element =document.getElementById(elementid);
    element.classList.remove('bg-orange-400');

}
function getrandomindex(){
    // generate arendom alphabate
    const alphabatestring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabatestring.split('');
    // console.log(alphabates)
    // get a random index 0 to 25
    const randomnumber = Math.random()*25;
    const index = Math.round(randomnumber);
    const alphabat = alphabates[index];
    // console.log(index, alphabate);
    return alphabat;
}