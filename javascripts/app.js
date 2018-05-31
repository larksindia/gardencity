var num = 50;
$(window).bind('scroll', function() {
    if ($(window).scrollTop() > 5) {
        $('#nav').addClass('fixed');
    } else {
        $('#nav').removeClass('fixed');
    }
});
/*======= header-fixed script ends =======*/

/*======= header height fixed script starts =======*/
$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".header").addClass('smaller');
        } else {
            $(".header").removeClass("smaller");
        }
    });
});


function bindNavbar() {
    if ($(window).width() > 768) {
        $('.navbar-custom .dropdown').on('mouseover', function() {
            $('.dropdown-toggle', this).next('.dropdown-menu').show();
        }).on('mouseout', function() {
            $('.dropdown-toggle', this).next('.dropdown-menu').hide();
        });

        $('.dropdown-toggle').click(function() {
            if ($(this).next('.dropdown-menu').is(':visible')) {
                window.location = $(this).attr('href');
            }
        });
    } else {
        $('.navbar-custom .dropdown').off('mouseover').off('mouseout');
    }
}

$(window).resize(function() {
    bindNavbar();
});

bindNavbar();



$("#proj-1").on("click",function(){
    $("#largeModal").modal("hide");
    $("#largeModal1").modal('show')
});

$("#proj-2").on("click", function() {
  $("#largeModal1").modal("hide");
  $("#largeModal2").modal("show");
});

$("#proj-3").on("click", function() {
  $("#largeModal2").modal("hide");
  $("#largeModal").modal("show");
});