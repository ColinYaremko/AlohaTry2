//alert('Hello World!');


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



  var inputText,
      successStatus;

  $('.sbuttton button').on('click', function(){
    
    inputText = $('#subscribe-email').val();
      // console.log(inputText);
    });

    $.validator.setDefaults({
      debug: false
    });

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


//alert('Good bye world!');