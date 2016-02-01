var myNumber = 1;

$('#addOne').click(
  function() {
    myNumber = myNumber + 1;    
    $('#myNumber').text(myNumber);
  }
)

$('#subtractOne').click(

  function() {
    myNumber = myNumber - 1;    
    $('#myNumber').text(myNumber);
  }
)

var myNumber = 1;
var names = [
'Hot Pink',
'Red Carpet',
'Mint Sorbet',
'Blue Me Away',
'Lavender'
];
var images = [
'http://www.colorsolex.com/files/theme/1P1.PNG',
'http://www.colorsolex.com/files/theme/1R1.PNG',
'http://www.colorsolex.com/files/theme/1M1.PNG',
'http://www.colorsolex.com/files/theme/1B1.PNG',
'http://www.colorsolex.com/files/theme/1L1.PNG'
];

// update function that will be called within click functions 
// (foward and back)
// carefule: indexing is zero-based like in Python!
function updateEverything(currentNumber) {
  $('#product').attr('src',images[currentNumber-1]);
  $('#name').text(names[currentNumber-1]);
  $('#myNumber').text(currentNumber);
}

$('#forward').click( function() {
  if (myNumber < 5) {
    myNumber = myNumber + 1;
  } else {
    myNumber = 1;
  }
  updateEverything(myNumber)
});

$('#back').click( function() {
  if (myNumber > 1) {
    myNumber = myNumber - 1;
  } else {
    myNumber = 5;
  }
  $('#myNumber').text(myNumber);
    updateEverything(myNumber)
});