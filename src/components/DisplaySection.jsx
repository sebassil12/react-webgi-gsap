function DsplaySection({ triggerPreview }) {
  const handleScrollTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant</p>
      <span className="description">
        Adisplay that's up to 2x bbrighter in the sun
      </span>
      <button className="button" onClick={triggerPreview}>
        Try me!
      </button>
      <button className="back-button" onClick={handleScrollTo}>
        TOP
      </button>
    </div>
  );
}

export default DsplaySection;
