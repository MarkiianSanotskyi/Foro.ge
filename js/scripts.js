$(function () {
      $(".rslides").responsiveSlides({
        speed: 800,
		timeout: 8000,
		pager: true,
		nav: true
      });
});


/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#ffffff" });
 });
 
 /*menu*/
$(".nav li").first().addClass('home');

/*FIRST WORD*/
$(function(){
 $('.content-title h1').each(function() {
  var a = $(this).html();
  var b = a.indexOf(' '); 
  if (b == -1) {
   b = a.length;
  }
  $(this).html('<span class="first-word">'+a.substring(0, b)+'</span>'+a.substring(b, a.length));
 });
});


(function($) {
		$(function() {
			$('input, select').styler();
		})
		})(jQuery)


$('#myTab a:first').tab('show'); // Выбор первой вкладки

/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 414,
        minHeight: 322,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/  

//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});
 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
        maxWidth: 800,
		arrows: true,
        fixed: false,
        autoCenter: false,
     
    });