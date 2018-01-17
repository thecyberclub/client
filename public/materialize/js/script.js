$(document).ready(function(){
  $('.modal').modal({
   dismissible: true,
   opacity: .5,
   inDuration: 300,
   outDuration: 200,
   startingTop: '4%',
   endingTop: '10%'
 });
 $("#question").on("open", function () {
  $("body").addClass("modal-open");
  }).on("close", function () {
    $("body").removeClass("modal-open")
  });
});
$('div').css({
    overflow: 'visible'
});
$(".button-collapse").sideNav();
