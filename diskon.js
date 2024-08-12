function sepatu (harga, diskon){

    let dapatDiskon = diskon * harga
    // console.log(dapatDiskon);
    let bayar = harga - dapatDiskon
    return bayar
}
let totaBayar =sepatu (13000, 0.18)
console.log (totaBayar)
