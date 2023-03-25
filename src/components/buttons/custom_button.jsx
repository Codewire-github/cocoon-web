export const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: "black", color: "white", padding: "1rem 2rem" }}
    >
      {props.name}
    </button>
  );
};
