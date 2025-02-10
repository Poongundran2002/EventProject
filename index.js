// toogle navbar
let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector("header .navbar");

MenuBtn.onclick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
};

// Close navbar when scrolling
window.onscroll = () => {
    MenuBtn.classList.remove("fa-times");
    Navbar.classList.remove("active");
};

// swiper
var swiper= new Swiper(".ReviewSlider",{
    slidesPerView:1,
    grabCursor:true,
    loop:true,
    spaceBetween:10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


// theme toggle
let themeToggle = document.querySelector(".themeToggle")
let toggleBtn = document.querySelector(".toggleBtn")

toggleBtn.onclick =()=>{
    themeToggle.classList.toggle("active");
}


// main root color
document.querySelectorAll(".themeToggle .theme-btn").forEach((btn)=>{
    btn.onclick=() => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--main",color);
    };
});

// login & registration 
var x=document.getElementById("login");
var y=document.getElementById("register");
var z=document.getElementById("bbtn");

function register(){
    x.style.left="-400px";
    y.style.left="50px";
    z.style.left="110px";
}
function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";
};


function onPageLoad(){
    $('.cateringform-section').addClass('hidden');
     $('.halldform-section').addClass('hidden');
     $('.hallform-section').addClass('hidden');

}

function cateringshowForm(){
    $('.cateringform-section').removeClass('hidden');
     $('.halldform-section').addClass('hidden');
     $('.hallform-section').addClass('hidden');

}

function decorationshowForm(){
    $('.halldform-section').removeClass('hidden');
     $('.cateringform-section').addClass('hidden');
     $('.hallform-section').addClass('hidden');

}

function hallshowForm(){
    $('.hallform-section').removeClass('hidden');
     $('.cateringform-section').addClass('hidden');
     $('.halldform-section').addClass('hidden');

}




