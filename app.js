const btnTranslate = document.querySelector('#btn-translate');
const txtInput = document.querySelector('#txt-input');
const outputDiv = document.querySelector('#output');

const serverURL = 'https://api.funtranslations.com/translate/minion.json';

const getTranslationalURL = (text) => {
  return serverURL + '?' + 'text=' + text;
};

const errorHandler = (error) => {
  console.log('error occured', error);
  alert('something wrong with server, try after some time ');
};

const clickHandler = () => {
  var inputText = txtInput.value; //taking input

  //calling server

  fetch(getTranslationalURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener('click', clickHandler);
