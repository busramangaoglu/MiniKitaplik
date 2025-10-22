import KitapKarti from './KitapKarti';

const KitapListe = ({ kitaplar, onFavoriToggle }) => {
  return (
    <div className="kitap-liste">
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          {...kitap}
          onFavoriToggle={onFavoriToggle}
        />
      ))}
    </div>
  );
};

export default KitapListe;