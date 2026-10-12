/* RunInvestingTR Akademi · platform başlangıç verisi (11 Eki 2026, 1903'ün "düzenlemeler" notu + tanıtım videosuna göre)
   Program ve ders adları hocanın İçindekiler.xlsx dosyasından (11 Eki) birebir alındı.
   SPL soruları ÖRNEKTİR: hocanın özgün ders notlarıyla yönetici panelinden büyütülür. */
window.RIT_VERI = {
  surum: 4,
  programlar: [
    { kod: "A", baslik: "Finansal Yatırım", aciklama: "Finansal yatırımın temel kavramları, finansal piyasaların işleyişi ve yatırım araçları.", gorsel: "../img/levent.jpg" },
    { kod: "B", baslik: "Finansal Piyasalarda Yatırımcı Olmak", aciklama: "Yatırımcı psikolojisi, yatırımcı davranışları, risk yönetimi ve yatırımcı disiplininin temel prensipleri.", gorsel: "../img/islem-odasi.jpg" },
    { kod: "C", baslik: "Finansal Okuryazarlık", aciklama: "Ekonomik ve finansal gelişmeleri doğru değerlendirebilmek için gerekli temel bilgiler.", gorsel: "../img/kutuphane.jpg" },
    { kod: "D", baslik: "Teknik Analiz", aciklama: "Grafik okuma, trend analizi, indikatörler, formasyonlar ve teknik analiz stratejileri.", gorsel: "../img/ekran-yakin.jpg" }
  ],
  // video: YouTube (liste dışı) bağlantısı; boşsa "Video yakında eklenecek". demo: ücretsiz üyenin izleyebildiği ders.
  dersler: [
    { id: "A1", program: "A", sira: 1, baslik: "Finansal Yatırım Nedir ve Finansal Yatırım Piyasa Türleri", video: "", demo: true },
    { id: "A2", program: "A", sira: 2, baslik: "Finansal Piyasaların Fonksiyonları", video: "" },
    { id: "A3", program: "A", sira: 3, baslik: "Finansal Yatırım Araçları ve Ürünler", video: "" },
    { id: "A4", program: "A", sira: 4, baslik: "Para ve Sermaye Piyasaları ve Genel Bilgiler", video: "" },
    { id: "B1", program: "B", sira: 1, baslik: "Yatırımcı Psikolojisi", video: "", demo: true },
    { id: "B2", program: "B", sira: 2, baslik: "Yatırımcı Davranışları ve Yatırımcı Prensipleri", video: "" },
    { id: "B3", program: "B", sira: 3, baslik: "Piyasayla Birlikte Hareket Etmek", video: "" },
    { id: "B4", program: "B", sira: 4, baslik: "Risk Yönetimi", video: "" },
    { id: "B5", program: "B", sira: 5, baslik: "Yatırımcı Disiplininin Önemi", video: "" },
    { id: "C1", program: "C", sira: 1, baslik: "Enflasyon Nedir ve Türleri", video: "", demo: true },
    { id: "C2", program: "C", sira: 2, baslik: "Para (Faiz) Politikaları", video: "" },
    { id: "C3", program: "C", sira: 3, baslik: "Enflasyon Faiz İlişkisi", video: "" },
    { id: "C4", program: "C", sira: 4, baslik: "Piyasa Dışı Etkenler", video: "" },
    { id: "C5", program: "C", sira: 5, baslik: "Paranın Zaman Değeri ve Fırsat Maliyeti", video: "" },
    { id: "C6", program: "C", sira: 6, baslik: "Enflasyonist Verilerin Yorumlanması", video: "" },
    { id: "C7", program: "C", sira: 7, baslik: "Enflasyona Karşı Korunmanın Etkili Yöntemleri", video: "" },
    { id: "C8", program: "C", sira: 8, baslik: "Arz Talep Dengesi", video: "" },
    { id: "C9", program: "C", sira: 9, baslik: "Dünya İktisat Tarihi Özeti", video: "" },
    { id: "D1", program: "D", sira: 1, baslik: "Teknik Analize Giriş ve TradingView Kullanımı", video: "", demo: true },
    { id: "D2", program: "D", sira: 2, baslik: "Dow Teorisi ve Teknik Analizin Temel Varsayımları", video: "" },
    { id: "D3", program: "D", sira: 3, baslik: "Grafik Zaman Dilimleri", video: "" },
    { id: "D4", program: "D", sira: 4, baslik: "Destek Direnç Çizimi ve Çalışma Prensibi", video: "" },
    { id: "D5", program: "D", sira: 5, baslik: "Destek Dirençlerin Rol Değişimi ve Pozisyon Aç/Kapa", video: "" },
    { id: "D6", program: "D", sira: 6, baslik: "Trend Kanalları ve Yön Tespiti", video: "" },
    { id: "D7", program: "D", sira: 7, baslik: "Trend Yorumlanması ve Strateji Kurma", video: "" },
    { id: "D8", program: "D", sira: 8, baslik: "Trend Kırılımları ve Trend Değişimi", video: "" },
    { id: "D9", program: "D", sira: 9, baslik: "Mum Matematiği", video: "" },
    { id: "D10", program: "D", sira: 10, baslik: "İndikatörler (RSI, MACD, Bollinger Bandı, DMI ve ADX)", video: "" },
    { id: "D11", program: "D", sira: 11, baslik: "Hareketli Ortalamalar", video: "" },
    { id: "D12", program: "D", sira: 12, baslik: "Fibonacci", video: "" },
    { id: "D13", program: "D", sira: 13, baslik: "Uyumsuzluklar", video: "" },
    { id: "D14", program: "D", sira: 14, baslik: "Formasyonların Çalışma Prensipleri", video: "" },
    { id: "D15", program: "D", sira: 15, baslik: "Trend Devam Formasyonları", video: "" },
    { id: "D16", program: "D", sira: 16, baslik: "Trend Dönüş Formasyonları", video: "" },
    { id: "D17", program: "D", sira: 17, baslik: "Formasyonlar ve Göstergeler Arasındaki Etkileşim", video: "" },
    { id: "D18", program: "D", sira: 18, baslik: "Harmonik Formasyonlar", video: "" }
  ],
  dokumanKategorileri: ["Haftalık Analizler", "Makroekonomik Araştırmalar", "Finansal Eğitimler", "SPL 1. Düzey", "SPL 2. Düzey", "SPL 3. Düzey", "Türev Araçlar", "Videolu Anlatım"],
  dokumanlar: [
    { id: "d1", kategori: "Makroekonomik Araştırmalar", tarih: "2026-09-26", baslik: "Tera ve Pusula Fon Krizi: Haftalar Öncesinden Yaptığım Uyarılar ve Krizin Anatomisi", dosya: "dosya/tera-pusula-fon-krizi.pdf", demo: true }
  ],
  // erişim alanları: arsiv (video arşivi), dokuman, canli, forum, spl
  paketler: [
    { kod: "spl", ad: "SPL Soru Bankası", fiyat: "1.490 ₺", donem: "6 ay", vurgu: "Tüm düzeyler tek fiyat", erisim: ["spl"],
      maddeler: ["SPL 1, 2, 3. Düzey + Türev Araçlar", "Sınırsız 10 soruluk alıştırma", "25 soruluk gerçek sınav formatında denemeler", "Konu bazlı başarı analizi"], not: "Rakipler her düzeyi ayrı satıyor (1.200-1.600 ₺/düzey)." },
    { kod: "arsiv", ad: "Arşiv Paketi", fiyat: "4.900 ₺", donem: "1 yıl", vurgu: "Kendi hızınızda", erisim: ["arsiv", "dokuman"],
      maddeler: ["A-B-C-D programlarının tüm ders videoları", "Haftalık analizler ve makro araştırmalar", "Ders notları (PDF)", "Sertifika"], not: "Canlı eğitim ve forum dahil değildir." },
    { kod: "tam", ad: "Tam Paket", fiyat: "$500", donem: "1 yıl", vurgu: "En kapsamlı", erisim: ["arsiv", "dokuman", "canli", "forum", "spl"], one: true,
      maddeler: ["Haftalık canlı eğitimler", "Rütbeli yatırımcı forumu", "Tüm video arşivi ve dokümanlar", "SPL Soru Bankası dahil", "Kıdemli yatırımcıya ödüller"], not: "" }
  ],
  forumKategorileri: [
    { id: "altin", ad: "Altın", aciklama: "Altın ile ilgili analiz ve tartışmalar" },
    { id: "borsa", ad: "Borsa", aciklama: "Borsa İstanbul ve dünya borsaları ile ilgili tartışmalar" },
    { id: "egitim", ad: "Eğitim & Sorular", aciklama: "Derslerle ilgili sorular ve tartışmalar" },
    { id: "fx", ad: "FX", aciklama: "Döviz ve global piyasa enstrümanları" },
    { id: "genel", ad: "Genel Sohbet", aciklama: "Diğer her şey" }
  ],
  // puanlar (hocanın sistemi): paylaşım 5 · yorum 2 · beğeni almak 1 · beğeni vermek 1
  puan: { paylasim: 5, yorum: 2, begeniAl: 1, begeniVer: 1 },
  rutbeler: [
    { ad: "Acemi Yatırımcı", min: 0 }, { ad: "Yatırımcı", min: 30 }, { ad: "Deneyimli Yatırımcı", min: 100 },
    { ad: "Uzman Yatırımcı", min: 300 }, { ad: "Kıdemli Yatırımcı", min: 800, odul: "Kitap, ücretsiz SPL erişimi gibi ödüller" }
  ],
  splDuzeyler: [
    // 9 lisans: 1903'ün spl.php dosyasındaki sıra, ad ve simgeler (12 Eki, gelen-1012). Sorusu olmayan lisans "Yakında" görünür (PHP ile aynı kural).
    { kod: "spl1", ad: "SPL 1. Düzey", simge: "1️⃣" }, { kod: "spl2", ad: "SPL 2. Düzey", simge: "2️⃣" }, { kod: "spl3", ad: "SPL 3. Düzey", simge: "3️⃣" },
    { kod: "turev", ad: "Türev Araçlar Lisansı", simge: "🔥" }, { kod: "konut", ad: "Konut Değerleme Lisansı", simge: "🏠" }, { kod: "kredi", ad: "Kredi Derecelendirme Lisansı", simge: "📊" },
    { kod: "kurumsal", ad: "Kurumsal Yönetim Derecelendirme Lisansı", simge: "🏛️" }, { kod: "gayrimenkul", ad: "Gayrimenkul Değerleme Lisansı", simge: "🏗️" }, { kod: "bilgisistem", ad: "Bilgi Sistemleri Bağımsız Denetim Lisansı", simge: "💻" }
  ],
  // c[0] doğru şık (gösterimde karışır) · a: açıklama · k: konu
  sorular: [], // canlıda Supabase rit.sorular (RLS)
  // ücretsiz üye kayıt anketi (hocanın sitesindeki sorular): yatırımcı profili verisi
  ilgiAlanlari: ["Borsa İstanbul", "ABD Borsaları", "Forex", "Altın", "Kripto", "Makro Ekonomi"],
  seviyeler: ["Başlangıç", "Orta", "İleri"]
};
