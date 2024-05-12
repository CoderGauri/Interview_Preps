//find duplicates in an array

const arr = [2, 3, 5, 7, 5, 9];

// const findDup = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; i++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       } else {

//       }
//     }
//   }
// };
// return false;

// findDup(arr);

function containsDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return true;
      }
    }
  }

  return false;
}

containsDuplicate(arr);
