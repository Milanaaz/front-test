window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
        navbar.style.background = "rgba(35, 31, 33, 0.9)"; 
    } else {
        navbar.style.background = "transparent"; 
    }
});

document.querySelectorAll('.nav-line a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, 
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector(".location-img").addEventListener("click", function() {
    window.open("https://www.google.com/maps?q=Бишкек,Игембердиева+8", "_blank");
});


document.querySelector('.view-btn').addEventListener('click', function() {
    document.querySelector('.image-popup').style.display = 'flex';
});
document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.image-popup').style.display = 'none';
});

