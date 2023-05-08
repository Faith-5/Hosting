const icon = document.querySelector('#icon')
const navbar = document.querySelector('.navbar')

icon.onclick = () => {
    navbar.style.display = 'block';
    navbar.classList.toggle('open');
}