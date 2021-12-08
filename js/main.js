$(document).ready(function(){

$('.features-carousel').owlCarousel({
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
    $('#cont1').hide();
    $('#cont2').hide();
    $('#cont3').hide();
    $('#cont4').hide();
    $('#cont5').hide();
    $('#cont6').hide();
    $('#cont7').hide();

    $( "#click1" ).click(function() {
        $('#cont1').show();
        $('#cont2').hide();
        $('#cont3').hide();
        $('#cont4').hide();
        $('#cont5').hide();
        $('#cont6').hide();
        $('#cont7').hide();

    });

    $( "#click2" ).click(function() {
            $('#cont2').show();
            $('#cont1').hide();
            $('#cont3').hide();
            $('#cont4').hide();
            $('#cont5').hide();
            $('#cont6').hide();
            $('#cont7').hide();

    });

    $( "#click3" ).click(function() {
            $('#cont3').show();
            $('#cont2').hide();
            $('#cont1').hide();
            $('#cont4').hide();
            $('#cont5').hide();
            $('#cont6').hide();
            $('#cont7').hide();
    });

    $( "#click4" ).click(function() {
        $('#cont4').show();
        $('#cont2').hide();
        $('#cont3').hide();
        $('#cont1').hide();
        $('#cont5').hide();
        $('#cont6').hide();
        $('#cont7').hide();

    });

    $( "#click5" ).click(function() {
            $('#cont5').show();
            $('#cont2').hide();
            $('#cont3').hide();
            $('#cont4').hide();
            $('#cont1').hide();
            $('#cont6').hide();
            $('#cont7').hide();

    });

    $( "#click6" ).click(function() {
            $('#cont6').show();
            $('#cont2').hide();
            $('#cont3').hide();
            $('#cont4').hide();
            $('#cont5').hide();
            $('#cont1').hide();
            $('#cont7').hide();

    });

    $( "#click7" ).click(function() {
            $('#cont7').show();
            $('#cont2').hide();
            $('#cont3').hide();
            $('#cont4').hide();
            $('#cont5').hide();
            $('#cont6').hide();
            $('#cont1').hide();
    });

});