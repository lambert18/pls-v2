//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar_fixed');
        toTop.classList.remove('hidden');
        toTop.classList.remove('flex');
    } else {
        header.classList.remove('navbar_fixed');
        toTop.classList.add('flex');
        toTop.classList.add('hidden');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav_menu');
const menuList = document.querySelector('#list');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger_active');
    navMenu.classList.toggle('hidden');    
});

// Remove NavBar Hamburger outside
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger_active');
        navMenu.classList.add('hidden');  
    }
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if(darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// Toggle change position same with mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked= true;
  } else {
    darkToggle.checked= false;
  }

// Frame Image in about
const frameImg = document.querySelector('#img-frame');
const frame = document.querySelector('#frame');

frameImg.addEventListener("mouseover", function() {
    frame.classList.add('frame_img');
})

frameImg.addEventListener("mouseout", function() {
    frame.classList.remove('frame_img');
})

// Pop up message sent
const modal = document.getElementById("popup_msg");
const bgModal = document.getElementById("popup_bg");
const btn = document.getElementById("btnMsg");
const boxModal = document.getElementById("msg_box");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.classList.add("modal_close");
    bgModal.classList.add("hidden");
    boxModal.classList.add("close_modal");
}

window.onclick = function(e) {
    if (e.target == bgModal) {
        modal.classList.add("modal_close");
        bgModal.classList.add("hidden");
        boxModal.classList.add("close_modal");
    }
}