const navMenu = document.getElementById('menu')

window.addEventListener('scroll',()=> {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navMenu.style.padding = '0px'
        navMenu.style.fontSize = '16px'
    } else {
        navMenu.style.padding = '30px'
        navMenu.style.fontSize = '25px'
    }
})