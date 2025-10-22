import KitapKarti from './KitapKarti';

const FavoriPaneli = ({ favoriler, onFavoriToggle }) => {
  return (
    <div className="favori-paneli">
      <h2>Favoriler ({favoriler.length})</h2>
      <div className="favori-liste">
        {favoriler.map((kitap) => (
          <KitapKarti
            key={kitap.id}
            {...kitap}
            onFavoriToggle={onFavoriToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriPaneli;