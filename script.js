
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
let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26\n`;
 
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
     if (comma === 1) {
       row.ID = cell;
     } else if (comma === 2) {
       row.Name = cell;
     } else if (comma === 3) {
       row.Occupation = cell;
     } else if (comma === 4) {
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
 console.log(info)
 




                // GOING FROM STRING TO ARRAY
const array = [["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]]


console.log(array)
                //GOING FROM ARRAY TO OBJECT 
let objectInfo = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" },
 ];


console.log(objectInfo)
 
                //ADDING OBJECT 
let objectInfoAdd = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
 ];
 objectInfoAdd.pop();
//  insert object at index 1
 objectInfoAdd.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25"})
// insert at the end of array
objectInfoAdd.push({ id: "7", name: "Bilbo", occupation: "None", age: "111"});

console.log("ADDED NEW OBJECTS", objectInfoAdd);
// AVERAGE AGE
let ageArray = ["41", "19", "58", "26"]
let sum = 0;
for (let i = 0; i < ageArray.length; i++) {
    sum += parseInt(ageArray[i])
}
let average = sum / ageArray.length;
console.log("The average of the age array is:", average);

// TRANSFORM OBJECT BACK INTO CSV FORM
const infoForCSV = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
 ];

//  function to tranform information in array to CSV format
 function transformToCSV(infoForCSV) {
 let csv = '';

// For first line
csv += 'id,name,occupation,age\n';

// Loop through array

 for (let i = 0; i < infoForCSV.length; i++) {
  csv += infoForCSV[i].id + ',' + infoForCSV[i].name + ',' + infoForCSV[i].occupation + ',' + infoForCSV[i].age + '\n'
 }
 return csv;

 } 

const csv = transformToCSV(infoForCSV)
console.log("TRANSFORMED BACK TO CSV")
console.log(csv)