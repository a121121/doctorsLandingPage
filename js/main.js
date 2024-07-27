const mobileNav=document.querySelector('.mnav');
const closeBtn=document.querySelector('.mnav__close-btn');
const closeBtnIcon=document.querySelector('.mnav__close-btn-icon');

const navOpenedClass='left-0';
const navClosedClass='-left-[300px]';
const arrowLeftClass='fa-chevron-left';
const arrowRightClass='fa-chevron-right';

function toggleNav() {
    mobileNav.classList.toggle(navOpenedClass);
    mobileNav.classList.toggle(navClosedClass);
    closeBtnIcon.classList.toggle(arrowLeftClass);
    closeBtnIcon.classList.toggle(arrowRightClass);
}

closeBtn.addEventListener('click', toggleNav);

// Close nav when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav=mobileNav.contains(event.target);
    const isClickOnCloseBtn=closeBtn.contains(event.target);
    const isNavOpen=mobileNav.classList.contains(navOpenedClass);

    if (isNavOpen&&!isClickInsideNav&&!isClickOnCloseBtn) {
        toggleNav();
    }
});


const swiper=new Swiper('.swiper', {

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

// faq
const faqItems=document.querySelectorAll('.faq__item');
faqItems.forEach((item) => {
    const faqBtn=item.querySelector('.faq__btn');
    item.addEventListener('click', () => {
        const isOpen=item.classList.toggle('open');
        // item.classList.toggle('h-0');
        // item.classList.toggle('h-full');
        const iconClass=!isOpen? 'fa-solid fa-add':'fa-solid fa-minus';
        const iconElement=faqBtn.querySelector('i');
        iconElement.classList=`${iconClass} text-2xl`
    })
});



// ScrollReveal().reveal('.brands', { delay: 500 });
// scroll reveal animations 
const sr=ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600,
    reset: true // resets animations
})

//hero
sr.reveal('.hero__text', { origin: 'top' });
sr.reveal('.hero__img');

// stats
sr.reveal('.stats__item',
    {
        delay: 300,
        distance: '100px',
        interval: 100,
        origin: 'top'
    });

sr.reveal('.services');
sr.reveal('.services__top');
sr.reveal('.services__item', {
    delay: 300,
    distance: '100px',
    interval: 100,
    origin: 'top'
});

sr.reveal('.appointment__title');
sr.reveal('.appointment__form');

//testimonials
sr.reveal('.testimonial');
sr.reveal('.testimonial__container');

// team 
sr.reveal('.team__title');
sr.reveal('.team__slider');

//faq
sr.reveal('.faq__title');
sr.reveal('.faq__item', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

sr.reveal('.departments__bg');
sr.reveal('.departments__container');

//blog
sr.reveal('.blog__title');
sr.reveal('.blog__post', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//brands
sr.reveal('.brands__logo', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});

//newsletter
sr.reveal('.newsletter');
sr.reveal('.newsletter__container');

// footer 
sr.reveal('.footer__item', {
    delay: 600,
    distance: '100px',
    interval: 100,
    origin: 'bottom'
});