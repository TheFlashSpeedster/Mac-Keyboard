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

