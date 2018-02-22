function navigation() {
    $(".menu_btn").on("click",function () {
        $(".nav_bar_item").slideToggle("slow");
    })
}
navigation();

// 愛心
function favor() {
    $(".heart").on('click', function () {
        if ($(this).find('svg').attr('data-prefix') === 'far') {
            $(this).find('svg').attr('data-prefix', 'fas');
            } else {
            $(this).find('svg').attr('data-prefix', 'far');
        }
    })
}
favor();

function register() {
    $('.register').on('click',function () {
        $('.container_register').load('../html/register.html .register_container').fadeIn(300);
    });
}
register()

