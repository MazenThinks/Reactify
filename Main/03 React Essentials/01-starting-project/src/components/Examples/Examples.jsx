import "./Examples.css";

function Examples({ label, onSelect, isSelected }) {
  return (
    <>
      <li>
        <button
          className={isSelected ? "active" : undefined}
          onClick={onSelect}
        >
          {label}
        </button>
      </li>
    </>
  );
}

export default Examples;
