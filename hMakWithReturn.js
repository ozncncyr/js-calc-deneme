function topla(s1, s2) {
    return s1 + s2;
}
function cikar(s1, s2) {
    return s1 - s2;
}
function carp(s1, s2) {
    return s1 * s2;
}
function bol(s1, s2) {
    return s1 / s2;
}
function islemSec(islem, s1, s2) {
    switch (islem) {
        case "1":
            return topla(s1, s2);
        case "2":
            return cikar(s1, s2);
        case "3":
            return carp(s1, s2);
        case "4":
            return bol(s1, s2);
        default:
            return "Hatalı işlem seçtiniz!";
    }
}
function sonucuGoster(islem, s1, s2) {
    return "Sonuç: " + islemSec(islem, s1, s2);
}

alert("Hesap Makinesine Hoşgeldiniz!");
    let devam = "E";
    devamEt: while (devam.toUpperCase() === "E") {
        let sayi1 = parseInt(prompt("Lütfen 1. Sayıyı Giriniz:"));
        let sayi2 = parseInt(prompt("Lütfen 2. Sayıyı Giriniz:"));
        let islem = prompt("Lütfen İşlem seçiniz:\n1. Toplama\n2. Çıkarma\n3. Çarpma\n4. Bölme");
        alert(sonucuGoster(islem, sayi1, sayi2));
        devam = prompt("Başka bir işlem yapmak ister misiniz? (E/H)");
        if (devam.toUpperCase() === "E") {
            continue devamEt;
        }
    }
    alert("Hesap Makinesini kullandığınız teşekkür ederiz!");