import "./Example.css";

function Example({ label, onSelect, isSelected, children }) {
  return (
    <>
      <li>
        <button
          className={isSelected ? "active" : undefined}
          onClick={onSelect}
        >
          {children}
        </button>
      </li>
    </>
  );
}

export default Example;
