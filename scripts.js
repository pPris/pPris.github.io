// This can be done with a CSS hack (see the other answers), but it can also be done very easily with JavaScript.
// Set the div's width to (for example) 50%, use JavaScript to check its width, and then set the height accordingly. Here's a code example using jQuery:

$(document).ready(heightFunction)
// console.log("called")
$(window).resize(heightFunction)

var aspRatio = 4 / 3;

function heightFunction() {
    // var div = $('.project-item');
    // // var div = $('#item1')    
    // var width = div.width();
    // div.css('height', width * 3 / 4);
    var div = $('.thumbnail');
    // var div = $('#item1')    
    var width = div.width();
    div.css('height', width / aspRatio);
    console.log("width and height: " + div.width() + ", " + div.height());

    var div2 = $('.thumbnail img');
    div2.css('width', width )
    div2.css('height', width / aspRatio)
    // var div = $('#item1')    
    // var width = div.width();
    // div.css('height', width / aspRatio);
    // console.log("width and height: " + div.width() + ", " + div.height());


};
// console.log(width)
// console.log("div")
// console.log(div)


// making profile picture height same as about me paragraph
// apparently can be done by using table cell css
// $(function(){}

// ** going to have a problem when you deside thumbnails of different lengths 