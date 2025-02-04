let nav = document.getElementById("nav");

let left = document.getElementById("left");
if(screen.width < 800)
{
left.style.display = "none";
nav.style.height = "55px";
}

function change(){
    if(nav.style.height== "55px")
    {
        nav.style.height = "250px";
        left.style.display = "";
    }
    else
    {
        nav.style.height = "55px";
        left.style.display = "none";
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('.slider-image');
        let currentIndex = 0;

        images[currentIndex].classList.add('active');
        
        const nextButton = slider.parentElement.querySelector('.next');
        nextButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length; 
            images[currentIndex].classList.add('active');
        });

        const prevButton = slider.parentElement.querySelector('.prev');
        prevButton.addEventListener('click', () => {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + images.length) % images.length; 
            images[currentIndex].classList.add('active');
        });
    });
});
