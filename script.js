const kayitliOgrenciler = [];

const anaPanel = () => {
    let secim = prompt(
        "=== ÖĞRENCİ TAKİP SİSTEMİ ===\n\n" +
        "1 - Yeni Kayıt Ekle\n" +
        "2 - Kayıtları Listele\n" +
        "3 - Kayıt Sil\n" +
        "4 - Çıkış Yap\n\n" +
        "İşlem numarasını giriniz:"
    );

    if (secim === "1") {
        ogrenciKayitEkle();
    } else if (secim === "2") {
        ogrenciListesiniGoster();
    } else if (secim === "3") {
        ogrenciKayitSil();
    } else if (secim === "4") {
        alert("Sistemden çıkılıyor. Kolay gelsin!");
        return;
    } else {
        alert("Hatalı seçim yaptın, tekrar dene!");
        return anaPanel();
    }
};

const ogrenciKayitEkle = () => {
    let isim = prompt("Öğrencinin adını giriniz:");
    if (isim === null) return anaPanel();
    if (isim.trim() === "") {
        alert("İsim alanı boş bırakılamaz!");
        return ogrenciKayitEkle();
    }

    let soyisim = prompt("Öğrencinin soyadını giriniz:");
    if (soyisim === null) return anaPanel();
    if (soyisim.trim() === "") {
        alert("Soyisim alanı boş bırakılamaz!");
        return ogrenciKayitEkle();
    }

    let siraNo = kayitliOgrenciler.length > 0 ? kayitliOgrenciler[kayitliOgrenciler.length - 1].id + 1 : 1;

    let yeniKayit = {
        id: siraNo,
        ad: isim.trim(),
        soyad: soyisim.trim()
    };

    kayitliOgrenciler.push(yeniKayit);
    alert(`${yeniKayit.ad} ${yeniKayit.soyad} sisteme başarıyla kaydedildi!`);
    
    return anaPanel();
};

const ogrenciListesiniGoster = () => {
    if (kayitliOgrenciler.length === 0) {
        alert("Henüz kayıtlı bir öğrenci bulunmuyor.");
        return anaPanel();
    }

    let metin = "--- ÖĞRENCİ LİSTESİ ---\n\n";
    kayitliOgrenciler.forEach(item => {
        metin += `ID: ${item.id} -> ${item.ad} ${item.soyad}\n`;
    });

    alert(metin);
    console.log("Güncel Liste:", kayitliOgrenciler);
    
    return anaPanel();
};

const ogrenciKayitSil = () => {
    if (kayitliOgrenciler.length === 0) {
        alert("Silinecek kayıt bulunamadı.");
        return anaPanel();
    }

    let silinecekNoStr = prompt("Silmek istediğiniz öğrencinin ID değerini giriniz:");
    if (silinecekNoStr === null) return anaPanel();

    let hedefId = Number(silinecekNoStr);
    let siraIndex = kayitliOgrenciler.findIndex(item => item.id === hedefId);

    if (siraIndex !== -1) {
        let silinenOgrenci = kayitliOgrenciler.splice(siraIndex, 1)[0];
        alert(`${silinenOgrenci.ad} ${silinenOgrenci.soyad} kayıttan kaldırıldı.`);
    } else {
        alert("Belirttiğiniz ID numarasına ait öğrenci bulunamadı!");
    }

    return anaPanel();
};

anaPanel();
