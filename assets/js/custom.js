/* Custom Script */
/* Scroll Top */
$(document).ready(function() {
    "use strict";
    var offSetTop = 200;
    var $scrollToTopButton = $('.scrollToTop');
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });

    //Click event to scroll to top
    $scrollToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });

});
// fixed footer
var siteFooter = document.getElementById('site-footer');
if ((siteFooter.offsetTop + siteFooter.offsetHeight) < window.innerHeight) {
    siteFooter.classList.add('fixed-bottom', 'bottom-0', 'left-0', 'w-full');
}