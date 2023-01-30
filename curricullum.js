

const modal = document.querySelector('.modal');
 const closeModal = document.querySelector('.modal__close'); 



closeModal.addEventListener('click', (e)=> {
    e.preventDefault();
    modal.classList.remove('modal--show');
});


document.getElementById("button-up").addEventListener("click", scrollup);
function scrollup(){
    var currentScroll = document.documentElement.scrollTop;
    if (currentScroll > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo (0, currentScroll - (currentScroll/6));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop; 

    if (scroll > 100){

        buttonUp.style.transform = "scale(1)";
    }
        else if (scroll <500){
            buttonUp.style.transform = "scale(0)"
        }
        
}
