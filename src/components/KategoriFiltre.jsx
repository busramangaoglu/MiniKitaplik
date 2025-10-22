const KategoriFiltre = ({ kategori, onKategoriChange, kategoriler }) => {
  return (
    <div className="kategori-filtre">
      <select 
        value={kategori} 
        onChange={(e) => onKategoriChange(e.target.value)}
      >
        <option value="">Tüm Kategoriler</option>
        {kategoriler.map((kat) => (
          <option key={kat} value={kat}>
            {kat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KategoriFiltre;