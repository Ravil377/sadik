const modalOpenBtns = document.querySelectorAll('[data-id="openmodal"]');
const modalCloseBtns = document.querySelectorAll('[data-id="closemodal"]');
const modal = document.querySelector('.modal-js');
const arrowLeft = modal.querySelector('.arrow-left-js');
const arrowRight = modal.querySelector('.arrow-right-js');
const imgModal = modal.querySelector('.img-js');
let currentImg;

const closeModal = () => {
    modal.classList.remove('modal_opened');
    modalCloseBtns.forEach(btn => btn.removeEventListener('click', closeModal));
}

const checkKeyPress = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
};
  
const checkPressOverlay = (e) => {
    if (e.target === modal) {
        closeModal();
    }
};
  
const replaceImage = (img) => {
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    currentImg = img;
}

const openModal = (e) => {  
    const img = e.target;  
    modal.classList.add('modal_opened');
    modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));
    currentImg = img;
    replaceImage(img);
}



document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));
modalOpenBtns.forEach(btn => btn.addEventListener('click', (e) => openModal(e)));
arrowLeft && arrowLeft.addEventListener('click', () => {
    let stime;
    if(currentImg.previousElementSibling) {
        stime = clearTimeout();
        imgModal.classList.add('fadeInLeft');
        replaceImage(currentImg.previousElementSibling);
        stime = setTimeout(() => {
            imgModal.classList.remove('fadeInLeft');
        }, 500);
    }    
})
arrowRight && arrowRight.addEventListener('click', () => {
    let stime;
    if(currentImg.nextElementSibling) {
        console.log(currentImg.nextElementSibling);
        stime = clearTimeout();
        imgModal.classList.add('fadeInRight');
        replaceImage(currentImg.nextElementSibling);
        stime = setTimeout(() => {
            imgModal.classList.remove('fadeInRight');
        }, 500);
    }
})