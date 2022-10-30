// Variables

const accordion = document.getElementsByClassName('items');


let menuOpen = document.getElementById('menu-open');
let menuClose = document.getElementById('menu-close');


// open navbar
menuOpen.addEventListener('click', function(){
    menuClose.style.display = 'block';  
    menuOpen.style.display = 'none';

    let navContent = document.getElementById('navbar-menu');
    navContent.classList.add("active");
})

//close navbar
menuClose.addEventListener('click', function(){
    menuClose.style.display = 'none'; 
    menuOpen.style.display = 'block';

    let navContent = document.getElementById('navbar-menu');
    navContent.classList.remove('active');
})



// Accordion for the sub navigation
for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}

