$(document).on('ready', function() {
    
    $('.external-link').on('click', function() {
        var url = $(this).attr('href');
        window.open(url, '_blank');
        return false;
    });
});
