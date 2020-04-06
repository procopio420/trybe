let textInput = document.getElementById('text-input');
let text = document.getElementById('meme-text');

textInput.addEventListener('input', () => { text.innerHTML = textInput.value })

let imgInput = document.getElementById('meme-insert');
let img = document.getElementById('meme-image');

imgInput.addEventListener('input', () => {
  img.src = URL.createObjectURL(event.target.files[0]);
});

let btn1 = document.getElementById('button1');
let btn2 = document.getElementById('button2');
let btn3 = document.getElementById('button3');
let div = document.getElementById('meme-image-container');

btn1.addEventListener('click', () => {
  div.style.border = '3px dashed red';
});
btn2.addEventListener('click', () => {
  div.style.border = '5px double blue';
});
btn3.addEventListener('click', () => {
  div.style.border = '6px groove green';
});

let btn4 = document.getElementById('meme-1');
let btn5 = document.getElementById('meme-2');
let btn6 = document.getElementById('meme-3');
let btn7 = document.getElementById('meme-4');

btn4.addEventListener('click', () => {
  img.src = './imgs/meme1.jpeg';
});
btn5.addEventListener('click', () => {
  img.src = './imgs/meme2.jpeg';
});
btn6.addEventListener('click', () => {
  img.src = './imgs/meme3.jpeg';
});
btn7.addEventListener('click', () => {
  img.src = './imgs/meme4.jpeg';
});
