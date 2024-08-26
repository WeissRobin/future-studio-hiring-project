//res vip image
const vipPhotoWrapper = document.querySelector('.vipPhotoWrapper');

if(window.innerWidth < 500) {
    vipPhotoWrapper.classList.remove('col-xs-5');
} else {
    vipPhotoWrapper.classList.add('col-xs-5');
}

window.addEventListener('resize', () => {
    if(window.innerWidth < 500) {
        vipPhotoWrapper.classList.remove('col-xs-5');
    } else {
        vipPhotoWrapper.classList.add('col-xs-5');
    }
});

//navigation
const hamburgerIcon = document.querySelector('.hamburgerIcon');
const closeIcon = document.querySelector('.navigationClose');
const headerNavigation = document.querySelector('.headerNavigation');

hamburgerIcon.addEventListener('click', () => {
    headerNavigation.setAttribute('data-expand', true);
});

closeIcon.addEventListener('click', () => {
    headerNavigation.setAttribute('data-expand', false);
});