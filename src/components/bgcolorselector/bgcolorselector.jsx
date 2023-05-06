import "./bgcolorselector.css";
const BgColorSelector = (props) => {
  return (
    <div className="bgcolor-container">
      <section className="bgcolor-options">
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#ffdab9" }}
          onClick={() => {
            props.bgColorVal("#ffdab9");
          }}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#d8f500" }}
          onClick={() => {
            props.bgColorVal("#d8f500");
          }}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "white" }}
          onClick={() => {
            props.bgColorVal("white");
          }}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#3dffd0" }}
          onClick={() => {
            props.bgColorVal("#3dffd0");
          }}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#dccfbd" }}
          onClick={() => {
            props.bgColorVal("#dccfbd");
          }}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "rgb(241, 129, 129)" }}
          onClick={() => {
            props.bgColorVal("rgb(241, 129, 129)");
          }}
        ></button>
        <button
          id="bgcolor-item"
          style={{ backgroundColor: "rgb(82 0 255)" }}
          onClick={() => {
            props.bgColorVal("rgb(82 0 255)");
          }}
        ></button>

        <button
          id="bgcolor-item"
          style={{ backgroundColor: "#a58e81" }}
          onClick={() => {
            props.bgColorVal("#a58e81");
          }}
        ></button>
      </section>
    </div>
  );
};

export default BgColorSelector;
