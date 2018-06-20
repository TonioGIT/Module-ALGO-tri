// Converts from degrees to radians.
Math.toRadians = function(degrees) {
  return degrees * Math.PI / 180;
};


function distanceFromGrenoble(city)
{
  // console.log(city);
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;
  var cityLat = city.latitude;
  var cityLong = city.longitude;

  $earth_radius = 6378.137;   // Terre = sphère de 6378km de rayon
  $rlo1 = Math.PI*GrenobleLong/180;    // CONVERSION
  $rla1 = Math.PI*GrenobleLat/180;
  $rlo2 = Math.PI*cityLong/180;
  $rla2 = Math.PI*cityLat/180;
  $dlo = ($rlo2 - $rlo1) / 2;
  $dla = ($rla2 - $rla1) / 2;
  $a = (Math.sin($dla) * Math.sin($dla)) + Math.cos($rla1) * Math.cos($rla2) * (Math.sin($dlo) * Math.sin($dlo
));
  $d = 2 * Math.atan2(Math.sqrt($a), Math.sqrt(1 - $a));
  $distance = $earth_radius * $d
  // console.log($distance);
  return ($distance);
}

function swap(i,j) // Swap the values in array csvData
{
  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  // let ii = csvData[i];
  // let jj = csvData[j];

  let x = csvData[i];


  csvData[i] = csvData[j];
  csvData[j] = x;
}

function isLess(i,j)
{  displayBuffer.push(['compare', i, j]); // Do not delete this line (for display)

  if(distanceFromGrenoble(csvData[i])<distanceFromGrenoble(csvData[j])) {    
    return true;
  }
  else {
    return false;
  }
}

function insertsort()
{
  for(i=1; i<csvData.length; i++) {
    for(k=i; k >0 && isLess(k, k-1); k--) {
      swap(k,k-1);
    }
  }
}

function selectionsort()
{
  for(i=0; i<=csvData.length-1; i++) {
    k=i;
    for(j=i+1; j<=csvData.length-1; j++) {
      if(isLess(j,k)) {
        k=j;
      }
    }    
    swap(i,k);      
  }
}

function bubblesort()
{
  for(i=0; i<=csvData.length-1; i++) {
    let swapped = false;
    for(j=csvData.length-1; j>i; j--) {
      if(isLess(j,j-1)) {
        swap(j,j-1);
        swapped = true;
      }
    }
    if (swapped == false) {
      return;
    }
  }
}

function shellsort()
{
  // let increment = csvData.length / 2;
  //   while (increment > 0) {
  //       for (i = increment; i < csvData.length; i++) {
  //           let j = i;
  //           let temp = csvData[i];
    
  //           while (j >= increment && csvData[j-increment] > temp) {
  //               csvData[j] = csvData[j-increment];
  //               j = j - increment;
  //           }
    
  //           csvData[j] = temp;
  //       }
    
  //       if (increment == 2) {
  //           increment = 1;
  //       } else {
  //           increment = parseInt(increment*5 / 11);
  //       }
  //   }
  // // return csvData;
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
  csvData = quicksortRec(csvData);  
  console.log('csvData trié:', csvData);
};

function quicksortRec(DataTemp)
{
  let len = DataTemp.length;
  if(len <=1) {
    return DataTemp;
  }  
  let pivot = DataTemp[0];
  let left = [];
  let right = [];

  for (var i = 1; i < len; i++) {
    DataTemp[i].dist < pivot.dist ? left.push(DataTemp[i]) : right.push(DataTemp[i]);    
  }
  return quicksortRec(left).concat(pivot, quicksortRec(right));
};

//   for (i=1; i<csvData.length; i++) {
//     if(csvData[i] < pivot) {
//       left.push(csvData[i]);      
//     }
//     else {
//       right.push(csvData[i]);
//     }
//   return quicksort(left).concat(pivot, quicksort(right));
//     // csvData[i] < pivot ? left.push(csvData[i]) : right.push(csvData[i]);
//   }
// }

// {
//   let pivot = csvData[csvData.length-1];
//   let left = [];

//   for (i=0; i<csvData.length; i++) {
//     if(csvData[i] < pivot) {
//       left.push(csvData[i]);      
//     }
//   }


// }

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
