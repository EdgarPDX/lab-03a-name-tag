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


const userInput = document.getElementById('click-change');

userInput.addEventListener('click', () => {
   console.log(userInput)
   
   const inputValue = document.getElementById('name-change')
   //get input
   console.log(inputValue.content)
   //get value from input
   //get div
   //set div content to value

    // post-click logic goes here!
})