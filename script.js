// Variables

const accordion = document.getElementsByClassName('items');

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
}