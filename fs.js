const fs = require('fs');

// fs.readFile('./file.txt','utf-8',(error,data)=>{
//     if (error) {
//         console.error(error);
//         return;
//     } else {
//         console.log(data);
//     }
// })

// const file = fs.readFileSync('./file.txt','utf-8');
// console.log(file);

// fs.writeFile('./file.txt','Changed',(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log('File has been returned successfully');
// });
// changed context of a existing file.


const text2 = fs.writeFileSync('text2.txt','I am a text file');//creates a new file
console.log('File text has been created successfully');  