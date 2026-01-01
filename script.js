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
