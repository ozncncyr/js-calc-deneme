let sayi1;
let sayi2;
let islem;

function hesapla() {
    sayi1 = parseInt(prompt("Lütfen 1. Sayıyı Giriniz:"));
    sayi2 = parseInt(prompt("Lütfen 2. Sayıyı Giriniz:"));
    islem = prompt("Lütfen İşlem seçiniz:\n1. Toplama\n2. Çıkarma\n3. Çarpma\n4. Bölme"); 
    switch (islem) {
        case "1":
            return alert("Sonuç: " + (sayi1 + sayi2));
            break;
        case "2":
            alert("Sonuç: " + (sayi1 - sayi2));
            break;
        case "3":
            alert("Sonuç: " + (sayi1 * sayi2));
            break;
        case "4":
            alert("Sonuç: " + (sayi1 / sayi2));
            break;
        default: alert("Hatalı Giriş Yaptınız!");
    }
    let devam = prompt("Başka bir işlem yapmak ister misiniz? (E/H)");
    if (devam.toUpperCase() === "E") {
        hesapla();
    }
    else {
        alert("Hesap Makinesini kullandığınız teşekkür ederiz!");
    }
}

alert("Hesap Makinesine Hoşgeldiniz!");
hesapla();