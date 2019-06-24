
let theButton = document.getElementById('the-button');


theButton.onclick = function(){

    let theInput = document.getElementById('the-input');

    let newTaskContent = theInput.value;    //value is like innerHTML except inputs are special so they have a sepcial thing called value 

    let newThing = document.createElement('li');
    let list = document.getElementById('the-list');
    
    newThing.innerText = newTaskContent;

    
    list.appendChild(newThing);

    theInput.value = "";
    
}

let wolfButton = document.getElementById('wolf-button');

wolfButton.onclick = function(){
    let theActualWolf = document.getElementById('daWolf');

    let current = theActualWolf.getAttribute('src');

    if(current === 'wolf.jpg'){

        theActualWolf.setAttribute('src', 'wolf-professional.jpg');
    } else {
        theActualWolf.setAttribute('src', 'wolf.jpg');
    }




    console.log(thing)
}


let allTheButtons = document.getElementsByClassName('clickable');


// for(let i=0; i < allTheButtons.length; i++){

//     allTheButtons[i].onclick = function(e){

//         console.log(e.currentTarget.parentElement);

//         e.currentTarget.parentElement.style.backgroundColor = 'blue';
        
//     }

// }