$(document).ready(function() {
    setTimeout(function() {
        alerts = $('.styleci-alert');
        alerts.addClass('bounceOut');
        alerts.addClass('animated');
        setTimeout(function() {
            alerts.slideUp(500, function() {
                alerts.remove();
            });
        }, 500);
    }, 2500);
});
