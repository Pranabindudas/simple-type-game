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

    // stop the game if user type esc
    if(playerpressed==='Escape'){
        gameover();
    }

    // get expect to press
    const currentalphabateelement = document.getElementById('current-alphabate');
    const currentalphabate = currentalphabateelement.innerText;
    const exceptalpha = currentalphabate.toLowerCase();
    console.log(playerpressed, exceptalpha);


    // check correct or not
    if(playerpressed===exceptalpha){
        console.log('you are get a point');


        // update the game score
        // 1.get the current score
        const currentscore = getelementvaluebyid('current-score');
        const newscore = currentscore + 1;
        settextelementbyid('current-score', newscore)


        // ------------------------------------------
        // const currentscoreelement = document.getElementById('current-score');
        // const currentscoretext = currentscoreelement.innerText;
        // const currentscore = parseInt(currentscoretext);
        // console.log(currentscore);
        
        // // 2.increse the score by 1
        // const newscore = currentscore + 1;
        // // 3.so the upadted score
        // currentscoreelement.innerText = newscore;
        // start a new round
        removebackgroundbyid(exceptalpha);
        continuegame();
    }
    else{
        console.log('you lost 1 point')
        const currentlife = getelementvaluebyid('life-point');
        const newlife = currentlife -1;
        settextelementbyid('life-point', newlife)

        // -------------------------------------------
        // 1.get the current score number 
        // const currentlifeelement = document.getElementById('life-point');
        // const currentlifetext = currentlifeelement.innerText;
        // const currentlife = parseInt(currentlifetext);
        // // 2.reduced the life count
        // const newlife = currentlife - 1;

        // // 3.upate the life point
        // currentlifeelement.innerText = newlife;
        if(newlife===0){
            gameover();
        }
    }
}
document.addEventListener('keyup', handlekeybordbuttonpress)




// call function
function play(){
    // hide everything first
    hideelementbyid('home-screen')
    hideelementbyid('final-score')
    showelementbyid('playground-section');
    // reset score and life
    settextelementbyid('life-point', 5);
    settextelementbyid('current-score',0);
    continuegame()
}
// game over and score show
function gameover(){
    
    hideelementbyid('playground-section');
    showelementbyid('final-score');
    // update final score
    // 1.get the last score
    const lastscore =getelementvaluebyid('current-score');
    settextelementbyid('game-score', lastscore);
    // clear the last select alphabate
    const alphabated = gettextelemtbyid('current-alphabate');
    removebackgroundbyid(alphabated);

}
// play again function





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
function getelementvaluebyid(elementid){
    const element = document.getElementById(elementid);
    const elementvaluetext = element.innerText;
    const value = parseInt(elementvaluetext);
    return value;
}
function settextelementbyid(elementid, value){
    const element = document.getElementById(elementid);
    element.innerText = value;

}
function gettextelemtbyid(elementid){
    const element = document.getElementById(elementid);
    const text = element.innerText;
    return text;
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