// toggle class active
    const navbarNav = document.querySelector ('.navbar-nav');
    // ketika humburger menu di klik
document.querySelector( '#Hamburger-Item').onclick = () => {
    navbarNav.classList.toggle('active');
};
// klik diluar sidebar untuk menghilangkan nav
const Hamburger = document.querySelector('#Hamburger-Item');

document.addEventListener('click',function(e){
    if(!Hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    } 
});