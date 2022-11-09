// déclaration de variable

const firstWish = $("#firstWish");
const secondWish = $("#secondWish");
const thirthWish = $("#thirthWish");
const birthday_card = $("section");
const hbdText = $("h1");


// curseur pointeur pour signifier que c'est cliquable
$('.notification').css("cursor","pointer")
// cacher les voeux

secondWish.hide();
thirthWish.hide();


// ajouter les fonctions au clic

firstWish.on("click", function () {
  secondWish.show();
});

secondWish.on("click", function () {
  thirthWish.show();
});


// dernière animation
thirthWish.on("click", function () {
  $(".box").addClass("weddingcake");
  hbdText.animate({fontSize:'25px'},1000)
  hbdText.addClass('has-text-danger')

 
});






// meme processus avec vanilla js

// const btn1 = document.querySelector('#firstWish')
// const btn2 = document.querySelector('#secondWish')
// const btn3 = document.querySelector('#thirthWish')
// const card= document.querySelector('.box')
// const hbdText2 = document.querySelector('h1')
// const not= document.querySelectorAll('.notification')

// not.forEach(element => {
//   element.style.cursor='pointer'
// });


//   btn3.style.display='none'
//   btn2.style.display='none'

// btn1.addEventListener('click',()=>{
//   btn2.style.display='block'
// })
// btn2.addEventListener('click',()=>{
//   btn3.style.display='block'
// })
// btn3.addEventListener('click',()=>{
//   card.classList.add('weddingcake')
//   hbdText2.classList.add('has-text-danger')
//   setTimeout(() => {
//     hbdText2.style.fontSize='25px'
//   }, 500);

// })