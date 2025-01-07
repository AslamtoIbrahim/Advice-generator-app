const dividerImg = document.querySelector('.divider-img');

// change the divider image depending on the screen size

window.addEventListener('resize', changeDividerImage);

changeDividerImage();
function changeDividerImage(){
    const windowWidth = window.innerWidth;

  if (windowWidth <= 640) {
    dividerImg.src = '/images/pattern-divider-mobile.svg';
  } else {
    dividerImg.src = '/images/pattern-divider-desktop.svg';
  }
}