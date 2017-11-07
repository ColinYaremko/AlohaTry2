//alert('Hello World!');


$(document).ready(function() { //Build DOM first!!!!
  
// Fix "Skip Link" Focus in Webkit
  $(function() {
     $("a[href^='#']").not("a[href='#']").click(function() {
        $("#"+$(this).attr("href").slice(1)+"").focus();
     });
  });

  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    cellSelector: '.carousel-cell',
    prevNextButtons: false,
    autoPlay: true,
    groupCells: 1
  });



  /*https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
  */
  $(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  }); //Smooth scroll tested and working presently.


 
    var emailInput;
    
    $("#email-input").on("change", function() {
      emailInput = $(this).val();
      // The following watches for the on-change event so it checks the email address for validity, but only checks, it doesn't "subscribe", even if the subscribe button is used to trigger the on-change.
      if (validateEmail(emailInput)) {
        $(this).css({
          color: "white",
          background: "green",
          border: "1px solid green"
        });

        alert('Your email is valid.  Click send.  ');
        $("#email-input").empty();

      } else {
        $(this).css({
          color: "red",
          border: "1px solid red"
        });
    
        alert("This was not a valid email address");
      }
    }); 
    
    // clicking the subscribe button alone does nothing.  If the email validation was false, the subscribe button does nothing.  if the email address is valid (true), then it will give the "Yay.  You did it!" alert and refresh the page.
    $("#subscribe-button").on("click", function(e) {
      e.preventDefault();
      if (validateEmail(emailInput)) {
        alert("Yay.  You did it!");
      } else {
        return false;
        alert("The email address wasn't valid.");
      }
    });
    
    function validateEmail(email) {
      var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
      return $.trim(email).match(pattern) ? true : false;
    };
}); 


     /*
  var inputText,
      successStatus;

  $('.sbuttton button').on('click', function(){
    
    inputText = $('#subscribe-email').val();
      // console.log(inputText);
    });

    $.validator.setDefaults({
      debug: false
    });
    */
    /*
    // https://jqueryvalidation.org/documentation/
    $( "#subscribe-form" ).validate({
      rules: {
        field: {
          required: true,
          email: true
        }
      },
      success: function() {
        successStatus = "yes";
      //  console.log('yes');
      },
      submitHandler: function() { 
        if(successStatus == "yes"){
          alert("Submitted! " + inputText + '  Thank-you.');
        } 
        else {
          alert('Your email address isn\'t valid.  Please try again');
        }
       
      }
    });
    */

 
  
//alert('Good bye world!');