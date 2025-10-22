import { useState, useEffect } from 'react';
import './App.css';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPaneli from './components/FavoriPaneli';

// Örnek kitap verisi
const kitapVerisi = [
  { id: 1, baslik: "React'e giriş", yazar: "D.Usta", kategori: "Web" },
  { id: 2, baslik: "İleri JavaScript", yazar: "S.Kılıç", kategori: "Web" },
  { id: 3, baslik: "Veri Yapıları", yazar: "A.Demir", kategori: "CS" },
  { id: 4, baslik: "Algoritmalar", yazar: "E.Kaya", kategori: "CS" },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "N.Akın", kategori: "Tasarım" }
];

function App() {
  // State tanımlamaları
  const [kitaplar] = useState(kitapVerisi);
  const [aramaMetni, setAramaMetni] = useState(
    localStorage.getItem('aramaMetni') || ''
  );
  const [kategori, setKategori] = useState('');
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem('favoriler')) || []
  );

  // Kategorileri kitaplardan otomatik oluştur
  const kategoriler = [...new Set(kitaplar.map(kitap => kitap.kategori))];

  // Local Storage'a kaydetme
  useEffect(() => {
    localStorage.setItem('aramaMetni', aramaMetni);
    localStorage.setItem('favoriler', JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  // Favori ekleme/çıkarma işlemi
  const handleFavoriToggle = (kitapId) => {
    setFavoriler(prev => {
      const kitap = kitaplar.find(k => k.id === kitapId);
      const favoriIndex = prev.findIndex(f => f.id === kitapId);
      
      if (favoriIndex === -1) {
        return [...prev, { ...kitap, favorideMi: true }];
      } else {
        return prev.filter(f => f.id !== kitapId);
      }
    });
  };

  // Filtreleme işlemi
  const filtrelenmisKitaplar = kitaplar
    .filter(kitap => 
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()))
    .filter(kitap => 
      kategori ? kitap.kategori === kategori : true)
    .map(kitap => ({
      ...kitap,
      favorideMi: favoriler.some(f => f.id === kitap.id)
    }));

  return (
    <div className="App">
      <h1>Mini Kitaplık</h1>
      
      <div className="kontroller">
        <AramaCubugu 
          aramaMetni={aramaMetni} 
          onAramaMetniChange={setAramaMetni} 
        />
        <KategoriFiltre 
          kategori={kategori}
          onKategoriChange={setKategori}
          kategoriler={kategoriler}
        />
      </div>

      <div className="icerik">
        <div className="ana-panel">
          <KitapListe 
            kitaplar={filtrelenmisKitaplar}
            onFavoriToggle={handleFavoriToggle}
          />
        </div>
        <div className="yan-panel">
          <FavoriPaneli 
            favoriler={favoriler}
            onFavoriToggle={handleFavoriToggle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
