
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

// // Variables
// let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let commas = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ',') {
//     // if char is a comma, do this
//     commas++;
//   } else if (str[i] === '\n') {
//     //If char is a "\n", do this\
//     console.log(cell1, cell2, cell3, cell4);
//     commas = 0;
//     cell1 = ``;
//     cell2 = ``;
//     cell3 = ``;
//     cell4 = ``;

//   } else {
//     // any other char
//     if (commas == 0) {
//       // if 0 commas
//       cell1 += str[i];
//     } else if (commas == 1) {
//       // if 1 commas
//       cell2 += str[i];
//     } else if (commas == 2) {
//       // if 2 commas
//       cell3 += str[i];
//     } else {
//       // if 3 or more
//       cell4 += str[i];
//     }
//   }

//   if(i === str.length - 1) { // if index number is the same as length of string
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }


// // When code is outdated or inefficient, it often goes through a process called “refactoring.” Refactoring code is the process of restructuring that code without changing its original behavior.
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let info = [];
let row = {};
let cell = '';
let comma = 0;
let firstLine = true; 
// Loop through entire string
for (let i = 0; i < str.length; i++) {
  let char = str[i];
// to reach the end column at the comma or end of line
  if (char === ',' || char === '\n') {
    if (comma === 0) {
      row.ID = cell;
    } else if (comma === 1) {
      row.Name = cell;
    } else if (comma === 2) {
      row.Occupation = cell;
    } else if (comma === 3) {
      row.Age = cell;
    }
    // loop starts over and increment commas
cell = '';
comma++;

// '\n' means new row
if (char === '\n') {
  if (!firstLine) {
    info.push({ ...row});
  }
  // loop starts over for following row
  row = {};
  comma = 0;
  firstLine = false; 
}
// if character is not comma or new line it stays in cell
} else {
  cell += char;
}
}
info.forEach(person => {
  console.log(`Name: ${person.Name}, ID: ${person.ID}, Occupation: ${person.Occupation}, Age: ${person.Age}`);
})