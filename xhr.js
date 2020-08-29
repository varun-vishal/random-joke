const URL = 'https://api.chucknorris.io/jokes/random';

const button = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')

button.addEventListener('click', () => {
 getData(URL)
})

function getData(url) {
 const xhr = new XMLHttpRequest();
 xhr.open('GET', url)
 xhr.send();
 xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
   return
  } if (xhr.status === 200) {
   img.classList.add('shake-img')
   let { value } = JSON.parse(xhr.responseText);
   // let value = text.value;
   content.textContent = value;
   let random = Math.random() * 1000;
   setTimeout(() => {
    img.classList.remove('shake-img')
   }, random)
  } else {
   console.log({
    status: xhr.status,
    text: xhr.statusText
   });
  }
 }
}