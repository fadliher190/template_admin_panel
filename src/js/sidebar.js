$(".sidebar-nav .sidebar-nav-item a").click(function (e) { 
    e.preventDefault();
    
    $(this).parent().find('.sidebar-nav-subitem').slideToggle();
    $(this).find(".icon-arrow").attr("rotate", (_, attr) => { return (!attr) ? "90deg" : ""});
});

$(document).ready(function () {
    $(".sidebar-nav .sidebar-nav-item .nav-subitem-link").append(`<iconify-icon class="icon-arrow" icon="mingcute:right-line"></iconify-icon>`)
});