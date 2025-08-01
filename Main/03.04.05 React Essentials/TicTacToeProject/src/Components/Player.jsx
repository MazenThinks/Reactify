import { useState } from "react";

export default function Player({ initName, symbol, isActive }) {
  const [isEdited, SetIsEdited] = useState(true);
  const [playerName, SetplayerName] = useState(initName);

  function handleClick() {
    SetIsEdited((isEdited) => !isEdited);
  }

  function handleChange(event) {
    SetplayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      {isEdited ? (
        <span className="player">
          <span className="player-name">{playerName}</span>
          <span className="player-symbol">{symbol}</span>
        </span>
      ) : (
        <span className="player">
          <input
            type="text"
            required
            defaultValue={playerName}
            onChange={handleChange}
          />
          <span className="player-symbol">{symbol}</span>
        </span>
      )}

      <button onClick={handleClick}>{isEdited ? "Edit" : "Save"}</button>
    </li>
  );
}
