import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome</h1>
        <br></br>
        <p>Let's create your profile!</p>
        <br></br>
        <button onClick={() => navigate("/UserInput")}>
          Let's Go
        </button>
      </div>
    </div>
  );
}

export default Home;