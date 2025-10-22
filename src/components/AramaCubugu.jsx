const AramaCubugu = ({ aramaMetni, onAramaMetniChange }) => {
  return (
    <div className="arama-cubugu">
      <input
        type="text"
        placeholder="Kitap ara..."
        value={aramaMetni}
        onChange={(e) => onAramaMetniChange(e.target.value)}
      />
    </div>
  );
};

export default AramaCubugu;