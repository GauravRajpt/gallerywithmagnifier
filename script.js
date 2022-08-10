const background= document.querySelector('div.background');
const imager= document.querySelectorAll('.img');
const mainImg= document.createElement('img');
background.appendChild(mainImg);
mainImg.id= 'mainImg';
console.log(mainImg);

imager.forEach(element => {
    element.addEventListener('click',()=>{
        background.classList.add('active');
       mainImg.src= element.querySelector('img').src;
       
    });
});
background.addEventListener('click', (event) =>{
    if(event.target===background){
        background.classList.remove('active');
    }
} );