import { useNavigate } from "react-router-dom";
import { useProfile } from "../Context/ProfileContext";
import "./Greetings.css";
function Greeting() {
  const { profile } = useProfile();
  const title =
  profile.gender === "Female"
    ? "Miss"
    : profile.gender === "Male"
    ? "Mr."
    : ""; 
  return ( 
    <div>
      <h1>Hello {title} {profile.name}!</h1>
      <br></br>
      <p>Welcome to your profile.</p>
    </div>
  );
}
export default Greeting;