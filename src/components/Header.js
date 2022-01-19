import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
      />
    </header>
  );
};

export default Header;
