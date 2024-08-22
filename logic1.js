// function angka(data) {
//     let number = data
//     if (number % 2 === 0) {
//         console.log(number + "genap");
//     } else if  (number % 1 === 0) {
//     console.log(number + "ganjil");
//     } else console.log("bukan ganjil genap");
    
// }
// angka (3)

function score(data) {
    let cek = data 
    if (cek > 100) {
        console.log(cek + "invalid");
    } else if (cek >= 85) {
        console.log(cek + "A");
    } else if (cek >= 75){
        console.log(cek + "B");
    } else if (cek >= 60){
        console.log(cek + "C");
    } else if (cek > 1){
        console.log(cek + "D");
    } else if (cek < 0){
        console.log(cek + "not");
    } else console.log("invalid input");
}
score ("a")