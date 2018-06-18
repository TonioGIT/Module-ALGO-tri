// Converts from degrees to radians.
Math.toRadians = function(degrees) {
  return degrees * Math.PI / 180;
};


function distanceFromGrenoble(city)
{
  console.log("implement me !");
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  return 1;
}

function swap(i,j) // Swap the values in array csvData
{
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  console.log("implement me !");

}

function isLess(A,B)
{
  displayBuffer.push(['compare', A, B]); // Do not delete this line (for display)
}


function insertsort()
{
  console.log("implement me !");
}
function selectionsort()
{
  console.log("implement me !");
}
function bubblesort()
{
  console.log("implement me !");
}
function shellsort()
{
  console.log("implement me !");
}
function mergesort(data)
{
  console.log("implement me !");
}
function heapsort(data)
{
  console.log("implement me !");
}

function quicksort()
{
  console.log("implement me !");
}
function quick3sort(data)
{
  console.log("implement me !");
}



var algorithms = {
  'insert': insertsort,
  'select': selectionsort,
  'bubble': bubblesort,
  'shell': shellsort,
  'merge': mergesort,
  'heap': heapsort,
  'quick': quicksort,
  'quick3': quick3sort
}

function sort(algo)
{
  if (!algorithms.hasOwnProperty(algo)) {
    throw 'Invalid algorithm ' + algo;
  }
  var sort_fn = algorithms[algo];
  sort_fn();
}
