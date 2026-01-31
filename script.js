let inputElement = document.getElementById('input');
let dataArray = [];

function doType(key){
  dataArray.push(key)
  inputElement.value = dataArray.join('')
}

function deleteKey(){
  dataArray.pop()
  inputElement.value = dataArray.join('')
}

function glowCapsLock(){
  let cll = document.getElementById('cll');
  if (cll.style.backgroundColor == 'white'){
    cll.style.backgroundColor ='lightgreen'
  }
  else {
    cll.style.backgroundColor = 'white'
  }
}

// Add keyboard event listener for physical key presses
document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  // Handle backspace/delete
  if (key === 'Backspace' || key === 'Delete') {
    event.preventDefault();
    deleteKey();
    return;
  }
  
  // Handle enter/return
  if (key === 'Enter') {
    event.preventDefault();
    doType('\n');
    return;
  }
  
  // Handle alphabets, numbers, and symbols
  if (key.length === 1) {
    event.preventDefault();
    doType(key.toLowerCase());
  }
});

