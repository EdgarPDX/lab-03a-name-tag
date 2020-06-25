const pinkButton = document.getElementById('pink');

pinkButton.addEventListener('click', () => {
    console.log(pinkButton);
    // validate pinkbutton click
    const pinkChange = document.getElementById('nametag');
    // grabbing ID
    pinkChange.style.background = 'pink';
    
    // post-click logic goes here!
})

const lightBlueButton = document.getElementById('light-blue');

lightBlueButton.addEventListener('click', () => {
    console.log(lightBlueButton);
    // validate pinkbutton click
    const lightBlueChange = document.getElementById('nametag');
    // grabbing ID
    lightBlueChange.style.background = 'lightblue';
    
    // post-click logic goes here!
})

const lightGreenButton = document.getElementById('light-green');

lightGreenButton.addEventListener('click', () => {
    console.log(lightGreenButton);
    // validate  click
    const lightGreenChange = document.getElementById('nametag');
    // grabbing ID
    lightGreenChange.style.background = 'lightgreen';
    
    
})

// Input code
const nameChangeButton = document.getElementById('click-change');
const oldName = document.getElementById('name-name')
const inputValue = document.getElementById('name-change')

nameChangeButton.addEventListener('click', () => {
       
   //get input
  
    //validating input
    const newName = inputValue.value
        //get value from input
    const nameChange =
   //get div
       oldName.textContent = newName
   //set div content to value

    // post-click logic goes here!
})