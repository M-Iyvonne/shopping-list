$(document).ready(function (){ 
    $("form").on("submit", function(event){
    	event.preventDefault();
      	var userInput = $("#shopping-list-entry").val();    
   		console.log(userInput);
	    $('.shopping-list').append('<li><span class="shopping-item">' +
                userInput + '</span><div class="shopping-item-controls">' + '<button class="shopping-item-toggle">' + '<span class="button-label"> check </span></button><button class="shopping-item-delete">' + '<span class="button-label"> delete </span></button></div></li>');
     });

	$(".shopping-list").on("click", ".shopping-item-toggle", function (event){
        event.preventDefault();
        $(this).closest('li').find(".shopping-item").toggleClass("shopping-item__checked");
    });
	$(".shopping-list").on("click", ".shopping-item-delete", function (event){
        event.preventDefault();
        $(this).closest('li').remove();
	});
});




