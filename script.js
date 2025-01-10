const dividerImg = document.querySelector('.divider-img');
const button = document.querySelector('.button');
const adviceText = document.querySelector('.advice-text');

// change the divider image depending on the screen size

window.addEventListener('resize', changeDividerImage);

changeDividerImage();
function changeDividerImage() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 640) {
    dividerImg.src = '/images/pattern-divider-mobile.svg';
    return;
  }
  
  dividerImg.src = '/images/pattern-divider-desktop.svg';
}


button.addEventListener('click', async () => {
  button.style.backgroundColor = getVarColor('--grayish-blue');
  button.style.pointerEvents = 'none';

  const randomNumber = Math.floor(Math.random() * 201);

  try {
    const response = await fetch(`https://api.adviceslip.com/advice/${randomNumber}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const advice = data.slip.advice;
    adviceText.textContent = advice;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    button.style.pointerEvents = 'auto';
    button.style.backgroundColor = getVarColor('--neon-green');
  }
});


function getVarColor(color) {
  const root = document.documentElement;
  return getComputedStyle(root).getPropertyValue(color);
}