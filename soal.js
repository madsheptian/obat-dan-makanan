function Say (ysd){
    return ysd
    .toLowerCase()
    .split (' ')
    .map(function(cus){
        return cus[0].toUpperCase() + word.substr(1)
    })
    .join(" ")
}
//console.log(Say("i love javascript"))


function say (abc){
// console.log (abc)
    let iniTamp = abc.split(" ")
    let iniDatanya = iniTamp

    let cobain = iniDatanya[0].replace(iniDatanya[0][0], iniDatanya[0][0].toUpperCase())
    let cobain2 = iniDatanya[1].replace(iniDatanya[1][0], iniDatanya[1][0].toUpperCase())
    let cobain3 = iniDatanya[2].replace(iniDatanya[2][0], iniDatanya[2][0].toUpperCase())
    // console.log(iniDatanya[0][0]);
    console.log(cobain + " " + cobain2 + " " + cobain3);
}

/**
 * Yang ounya index itu string dan array
 * yang punya length itu string dan array
 */


let firstName = "septian"
// console.log(firstName.replace(firstName[0], "S"));
say("febrian sakit amandel")
say("elvina aku kangen")
say("harus rajin solat")
say("jangan lupa baca")
say("uang 50000 lagi")
say("bandung kota kembang")
say("cimahi kota kecil")
