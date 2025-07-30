import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

function Header() {
  let words = ["Crucial", "Fundamental", "Important"];

  let randomInt;
  const getRandomInt = (max) => {
    randomInt = Math.floor(Math.random() * (max + 1));
    return randomInt;
  };

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {words[getRandomInt(2)]} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

export default Header;
