const URL = 'https://api.chucknorris.io/jokes/random';

const button = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')

button.addEventListener('click',async () => {
try {
 var data = await fetch(URL);
 var response = await data.json();
 displayData(response)
} catch (error) {
 console.log(error);
}
})


function displayData(data){
 img.classList.add('shake-img')
 let { value } = data;
 // let value = text.value;
 content.textContent = value;
 let random = Math.random() * 1000;
 setTimeout(() => {
  img.classList.remove('shake-img')
 }, random)
}