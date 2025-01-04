const form=document.querySelector('form');  //selecting form

const card1=document.querySelector('.card');//first card
const card2=document.querySelector('.card2') //second card

const dismiss=document.querySelector('.dismiss-btn');

let email=document.querySelector('#email');

const confirmTxt=document.querySelector('.confirmation');




//event listener added 
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    card1.classList.add('hide');
    card2.classList.remove('hide');
    confirmTxt.textContent=`A confirmation email has been sent to ${email.value}.Please open it and click the button inside to confirm your subscription.`
    email.value=''; // it will empty input field


   

});



//back to sign up page 
dismiss.addEventListener('click',()=>{
    location.reload();
});



