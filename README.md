# Mini Kitaplık Uygulaması

Bu proje, Web Teknolojileri dersi için geliştirilmiş bir React uygulamasıdır. Uygulama, okul kulübünün küçük bir web kitaplığını yönetmek için tasarlanmıştır.

## Özellikler

- Kitap arama (başlığa göre filtreleme)
- Kategori bazlı filtreleme
- Favori kitap ekleme/çıkarma
- Arama geçmişi ve favorilerin yerel depolamada saklanması
- Responsive tasarım

## Kullanılan Teknolojiler

- React.js
- Vite
- LocalStorage
- CSS3

## Uygulama Özellikleri

### Bileşenler

1. **App**: Ana bileşen
   - Kitap listesi yönetimi
   - Arama ve filtreleme mantığı
   - Favori kitap yönetimi

2. **AramaCubugu**: 
   - Kontrollü input bileşeni
   - Anlık arama filtrelemesi

3. **KategoriFiltre**: 
   - Kategori bazlı filtreleme
   - Dinamik kategori listesi

4. **KitapListe**: 
   - Filtrelenmiş kitap listesi görüntüleme
   - Kitap kartları yönetimi

5. **KitapKarti**: 
   - Kitap detayları görüntüleme
   - Favori ekleme/çıkarma işlemleri

6. **FavoriPaneli**: 
   - Favori kitapların listelenmesi
   - Favori sayısı gösterimi

## Kurulum

1. Projeyi klonlayın
\`\`\`bash
git clone https://github.com/busramangaoglu/MiniKitaplik.git
\`\`\`

2. Proje dizinine gidin
\`\`\`bash
cd mini-kitaplik
\`\`\`

3. Bağımlılıkları yükleyin
\`\`\`bash
npm install
\`\`\`

4. Uygulamayı başlatın
\`\`\`bash
npm run dev
\`\`\`

## Canlı Demo

[Mini Kitaplık Uygulaması](https://mini-kitaplik-wheat.vercel.app/)

## Öğrenci Bilgileri

- **Ad Soyad**: Büşra MANGAOĞLU
- **Öğrenci No**: OGRENCI_NO_HERE
- **Ders**: Web Teknolojileri
- **Ödev**: Mini Kitaplık Uygulaması
