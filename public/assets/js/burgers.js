// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-class").on("click", function(event) {
      var id = $(this).data("id");
      
      var newDevourState = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", true);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  function validateBurgerName(name){
    if(name == ""|| name == null || name.search(/^[0-9]*$/) != -1 || name.search(/^[ ]*$/)!= -1){
      alert("please enter a valid Burger name.");
      return false;
    }
    return true;
  }
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      if(validateBurgerName($("#userBurger").val().trim()) == true){

        var newBurger = {
          burger_name: $("#userBurger").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }
    });
  });
  