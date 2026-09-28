import { useNavigate } from "react-router-dom";
import { useProfile } from "../Context/ProfileContext";
import "./UserInput.css";
function UserInput() {
  const navigate = useNavigate();
  const { profile, setProfile } = useProfile();
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };
  const handleStart = () => {
    if (!profile.name || !profile.gender || !profile.dob) {
      alert("Please enter Name, Gender and Date of Birth.");
      return;
    }

    navigate("/greeting");
  };

  return (
 
<div className="profile-page">

  
      <div className="profile-card">
        <div className="profile-header">
          <h1>👤USER PROFILE</h1>
          <br></br>
          <h3>Enter your details to continue !</h3>
        </div>
        <div className="form-group">
          <label>Name</label><input type="text" name="name"value={profile.name}onChange={handleChange} placeholder= "Enter your name"/>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select
            name="gender"
            value={profile.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input
            type="text"
            name="dob"
            value={profile.dob}
            onChange={handleChange} 
             placeholder="dd-mm-yyyy"
          />
          
        </div>

        <button className="start-button" onClick={handleStart}>
          Start
        </button>

      </div>
           </div>
         

  );
}

export default UserInput;