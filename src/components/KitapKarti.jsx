const KitapKarti = ({ baslik, yazar, kategori, id, favorideMi, onFavoriToggle }) => {
  return (
    <div className="kitap-karti">
      <h3>{baslik}</h3>
      <p>Yazar: {yazar}</p>
      <p>Kategori: {kategori}</p>
      <button 
        onClick={() => onFavoriToggle(id)}
        className={favorideMi ? 'favori-aktif' : ''}
      >
        {favorideMi ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}
      </button>
    </div>
  );
};

export default KitapKarti;