// ketia.uwase





let openBtn = document.querySelector(".fa-bars")
let closeBtn = document.querySelector(".fa-close")
let mobileNav = document.querySelector(".mobile-nav")

openBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-toggle")
    openBtn.style.display = "none"
    closeBtn.style.display = "block"
})

closeBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-nav-toggle")
    closeBtn.style.display = "none"
    openBtn.style.display = "block"
})