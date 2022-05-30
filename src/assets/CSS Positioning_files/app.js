/*https://stackoverflow.com/a/7557433/3798450*/

var el = document.querySelector('.section-fixed');
var el2 = document.querySelector('.section-fixed-2');
var cat = document.querySelector('.naughty');
var cat2 = document.querySelector('.the-cat');

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function handler() {
    if(isElementInViewport(el)) {
        cat.classList.add('active');
    } else {
        cat.classList.remove('active');
    }

    if(isElementInViewport(el2)) {
        cat2.classList.add('active');
    } else {
        cat2.classList.remove('active');
    }
}

if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handler, false); 
    addEventListener('load', handler, false); 
    addEventListener('scroll', handler, false); 
    addEventListener('resize', handler, false); 
} else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handler); // IE9+ :(
    attachEvent('onload', handler);
    attachEvent('onscroll', handler);
    attachEvent('onresize', handler);
}