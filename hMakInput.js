function hesapla() {
    let sayi1 = document.getElementById('n1').value
    let sayi2 = document.getElementById('n2').value
    let islem = document.getElementById('operator').value
    let sonuc = document.getElementById('result').value
    sayi1=Number(sayi1)
    sayi2=Number(sayi2)
    sonuc=Number(sonuc)
    if(islem=='toplama'){
        sonuc = sayi1 + sayi2;
        document.getElementById('result').innerText =`Sonuc: ${String(sonuc)}`
    }
    else if(islem=='cikarma'){
        sonuc = sayi1 - sayi2;
        document.getElementById('result').innerText =`Sonuç: ${String(sonuc)}`
    }
    else if(islem=='carpma'){
        sonuc = sayi1 * sayi2;
        document.getElementById('result').innerText =`Sonuç: ${String(sonuc)}`
    }
    else if(islem=='bolme'){
        sonuc = sayi1 / sayi2;
        document.getElementById('result').innerText =`Sonuç: ${String(sonuc)}`
    }
    // Vücut Kitle Endeksi (TROLL)
    // else{
    //     sonuc=sayi2 / ((sayi1 / 100) ** 2)
    //     sonuc=Math.ceil(sonuc)
    //     document.getElementById('result').innerText =`Sonuç: ${String(sonuc)}`
    // }
}