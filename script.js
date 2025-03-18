
// // for(let i = 1; i <= 100; i++){
// //     if(i % 3 === 0 && i % 5 ===0){
// //         console.log('Fizz Buzz')
// //     } else if(i % 3 === 0){
// //         console.log('Fizz')
// //     } else if (i % 5 ===0) {
// //       console.log(Buzz)  
// //     } else {
// //         console.log(i)
// //     }

// // }

// // FEELING LOOPY

// let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let commas = 0;

// for(let i =0; i < str.length; i++){
//     if(str[i] === ","){
//         commas++;
//     } else if(str[i] === "\n") {
//         commas = 0;
//     } else {
//        if (commas ==0) {
//          console.log(`Cell1`);
//        } else if(commas == 1){
//         console.log(`Cell2`)
//        } else if(commas == 2){
//         console.log(`Cell3`)
//        }
//     }
//     if(i === str.length - 1) {

//     }
// }

// Variables
let str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let commas = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === ',') {
    // if char is a comma, do this
    commas++;
  } else if (str[i] === '\n') {
    //If char is a "\n", do this\
    console.log(cell1, cell2, cell3, cell4);
    commas = 0;
    cell1 = ``;
    cell2 = ``;
    cell3 = ``;
    cell4 = ``;

  } else {
    // any other char
    if (commas == 0) {
      // if 0 commas
      cell1 += str[i];
    } else if (commas == 1) {
      // if 1 commas
      cell2 += str[i];
    } else if (commas == 2) {
      // if 2 commas
      cell3 += str[i];
    } else {
      // if 3 or more
      cell4 += str[i];
    }
  }

  if(i === str.length - 1) { // if index number is the same as length of string
    console.log(cell1, cell2, cell3, cell4);
  }
}



