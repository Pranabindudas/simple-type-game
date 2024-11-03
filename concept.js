// function play(){
// //step1:-1 hide the home screen to hide the screen add the class hidden to the home section.
// const homesection = document.getElementById('home-screen');
// homesection.classList.add('hidden');
// // playground section
// const playgroundsection = document.getElementById('playground-section');
// playgroundsection.classList.remove('hidden');

// }









// call function
function play(){
    hideelementbyid('home-screen')
    showelementbyid('playground-section')
    continuegame()
}
function continuegame(){
    const alphabate = getrandomindex();
    console.log('your random alphabte', alphabate);
}
// set random alphabate
const currentalphabateelement = document.getElementById('current-alphabate');
currentalphabateelement.innerText = alphabate;


// optional
function hideelementbyid(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('hidden');
}
function showelementbyid(elementid){
    const element = document.getElementById(elementid)
    element.classList.remove('hidden');
}
function getrandomindex(){
    // generate arendom alphabate
    const alphabatestring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabates = alphabatestring.split('');
    console.log(alphabates)
    // get a random index 0 to 25
    const randomnumber = Math.random()*25;
    const index = Math.round(randomnumber);
    const alphabate = alphabates[index];
    // console.log(index, alphabate);
    return alphabate
}