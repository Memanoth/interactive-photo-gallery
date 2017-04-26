
//LIGHTBOX SCRIPT
$('.image-thumbnail').magnificPopup({
  //General Options
  delegate: 'a',
  type: 'image',
  autoFocusLast: false,
  showCloseBtn: false,

  //Image Options
  image: {
    titleSrc: 'data-caption'
  },
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    tPrev: 'Previous (Left arrow key)', // title for left button
    tNext: 'Next (Right arrow key)', // title for right button
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
  }
  // other options
});


//Change settings for mobile view
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 700px)"); //Width different due to landscape mobile mode
    mq.addListener(WidthChange);
    WidthChange(mq);
}
//Lightbox options based on width
function WidthChange(mq) {
    if (mq.matches) {
      //DESKTOP Options

    } else {
      //MOBILE options

    }
}



//SEARCH SCRIPT

//Initate variables
var $caption;
var $title
var $search;

//Detect keyup function
$('#search').keyup(function() {
  if ($('#search').val() !== "") {

    //Hide all children of main div
    $('.image-thumbnail').children().hide();

    //Store seach string in variable
    $search = $('#search').val().toLowerCase();

    //Loop through each child a tag
    $('.image-thumbnail a').each(function() {

      //Store data-title and alt attributes in appropriate variables
      $caption = $(this).attr("data-caption").toLowerCase();
      $title = $(this).children().attr("alt").toLowerCase();

      // Match the title and caption to search input
      if ($title.includes($search) || $caption.includes($search)) {
        $(this).parent().show();
      }
    });

  //Display all images when search input is empty
  } else {
    $('.image-thumbnail').children().show();
  }
});
