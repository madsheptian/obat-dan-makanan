function dasar(score) {
    let tampungBintang = ""
    for (let index = 1; index <= score; index++) { 
        tampungBintang += "*"
        console.log(tampungBintang);
    }
    // console.log(tampungBintang);
    
}
dasar(3)

 /*
 * function ===> Dasar Parameter "Score"
 * let tampungBintang = ""
 * 
 * 
 * let index = 1
 * index <= 3
 * 1 <= 3 // true
 *      // harapannya asteriks ini di tampung
 *      tampungBintang = tampungBintang + "*"
 *      tampungBintang = "" + "*"
 *      tampungBintang = "*"
 * index++
 * 1 + 1 = 2
 * index = 2
 * // harapannya asteriks ini di tampung
 *      tampungBintang = tampungBintang + "*"
 *      tampungBintang = "*" + "*"
 *      tampungBintang = "**"
 * 
 * let tampungBintang = "**"
 * 
 * let index = 2
 * index <= 3
 * 2 <= 3 // true
 * index++
 * 2 + 1 = 3
 * index = 3
 * // harapannya asteriks ini di tampung
 *      tampungBintang = tampungBintang + "*"
 *      tampungBintang = "**" + "*"
 *      tampungBintang = "***"
 * 
 * let tampungBintang = "***"
 * 
 * maka,
 * dasar(3) = ***
 */

 /**
  * function ===> Dasar Parameter "Score"
 * let tampungBintang = ""
 * 
 * LOOPING
 * {let index = 1
 * index <= 3
 * 1 <= 3 // true
 *      tampungBintang = tampungBintang + "*"
 *      tampungBintang = "" + "*"
 *     console.log (tampungBintang) = "*"
 * index++
 * 1 + 1 = 2
 * index = 2
 *      tampungBintang = "*" + "*"
 *      tampungBintang = "**"
 *     console.log (tampungBintang) = "**""
 * 
 * 
 * let index = 2
 * index <= 3
 * 2 <= 3 // true
 * index++
 * 2 + 1 = 3
 * index = 3
 *      tampungBintang = tampungBintang + "*"
 *      tampungBintang = "**" + "*"
 *      tampungBintang = "***"
 *    console.log (tampungBintang) = "***"
 *  console.log dalam looping =
 * 
 * 
 * 
 * maka,
 * dasar(3) = *
 *            **
 *            ***
  */