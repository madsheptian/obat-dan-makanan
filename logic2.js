// console.log("spetian");
// console.log("spetian");


// for (let index = 0; index < 2000; index++) {
//     // const element = array[index];
//     console.log("ini yang ke " + index + " =>> septian");
    
    
// }

// for (let index = 0; index < 2; index++) {
//     // const element = array[index];
//     console.log("Febrian");
// }


/**
 * LOOP 1
 * 
 * let index = 0
 * index < 2
 * 0 < 2 // TRUE
 *      print "febrian"
 * index++ // ini increment? penambahan 1
 * index + 1 = 1
 * index = 1
 * 
 * 
 * LOOP 2
 * 
 * let index = 1
 * 1 < 2 // true
 *      print "febrian"
 * index++
 * 1 + 1 = 2
 * 
 * LOOP 3
 * 
 * let index = 2
 * 2 < 2 // flase
 */

// for (let index = 1; index <= 10; index++) {
//     //const element = array[index];
//     console.log(index);
    
// }


// let name = ["daffa", "sheptian", "febrian"]


// // console.log(name []);
//  for (let index = 0; index < name.leght; index++) {
//     //const element = array[index];
//     console.log(index);
    
//  }

// function angka(data) {
//         let number = data
//         if (number % 2 === 0) {
//             console.log(number + " genap");
//         } else if  (number % 1 === 0) {
//         console.log(number + " ganjil");
//         } else console.log("bukan ganjil genap");
//         console.log("Febrian");
//         // for (let index< array.length; index++) {
//         //     const element = array[index];
            
//         // }
//     }
//     angka(7676778079)


    // function cobainAja(inputUser) {
    //    for (let index = 1; index <= inputUser; index++) {
    //     // const element = array[index]; 
    //         console.log(index);
            
    //    }
    // }

    // let tampungFunction = cobainAja(5)
    // console.log(tampungFunction);
    


    /**
     * 
     * jadi tolong lu looping dulu didalam function,
     * inputnya itu sesuai dari parameter
     */


// loopingFucntion(10)
    
function dasar(score) {

    for (let index = 1; index <= score; index++) {
        // const element = array[index];
        let goal = index
        if (index % 2 === 0) {
            console.log(index + "  genap");
        } else if  (index % 1 === 0) {
            console.log(index + "  ganjil");
        } else console.log(index + "invalid input");
    }
}
// console.log(index);

dasar(10)
