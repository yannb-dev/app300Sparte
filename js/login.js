const btnSignUp = document.getElementById('btnSignUp');
const btnLogIn = document.getElementById('btnLogIn'); 
const boite = document.getElementById('slide');


console.log(btnSignUp, btnLogIn, boite);

btnSignUp.addEventListener('click',()=>{

    boite.classList.remove('slideDown');
    boite.classList.add('slideUp');
    

    console.log('Slide vers signUp !');
    
})
btnLogIn.addEventListener('click',()=>{

    boite.classList.remove('slideUp');
    boite.classList.add('slideDown');
    console.log('Slide vers logIn !');
    
})

