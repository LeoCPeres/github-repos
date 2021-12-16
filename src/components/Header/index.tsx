import "./styles.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  function handleNavigateToRepo() {
    navigate(`/`);
  }

  return (
    <header>
      <img
        src="./images/logo-completa.png"
        alt=""
        style={{ cursor: "pointer" }}
        onClick={() => handleNavigateToRepo()}
      />
    </header>
  );
}
