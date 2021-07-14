$("ul").on("click", "li", function () {
  $(this).toggleClass("completed"); //shorter version
});

//if li is gray turn it black else turn it gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         $(this).css({
//             color:"black",
//             textDecoration:"none"
//     });
// }
//     else {
//             $(this).css({
//             color: "gray",
//             textDecoration: "line-through"

//         });

//     }

//click on X to delete Todo

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //create new li and text from input
    $("ul").append(
      "<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
