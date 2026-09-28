import { useEffect, useState } from "react";
import { useProfile } from "../Context/ProfileContext";
import "./Age.css";
function Age() {
  const { profile } = useProfile();
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const calculateAge = () => {
    if (!profile.dob) {
      return;
    }
    const [day, month, year] = profile.dob.split("-").map(Number);
    const birthDate = new Date(year, month - 1, day);
    const now = new Date();
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();
    if (seconds < 0) {seconds += 60;minutes--;}
    if (minutes < 0) {minutes += 60;hours--;}
    if (hours < 0) {hours += 24;days--; }
    if (days < 0) {months--;
    const previousMonth = new Date(now.getFullYear(),now.getMonth(),0 );
      days += previousMonth.getDate();}
    if (months < 0) { months += 12;years--;}
    setAge({
      years,
      months,
      days,
      hours,
      minutes,
      seconds
    });
  };
  useEffect(() => {calculateAge();
  const timer = setInterval(() => { calculateAge();}, 1000);
  return () => clearInterval(timer);}, [profile.dob]);
  return (
    <div className="age-page">
    <h1>Your Age</h1>
     <br></br>
     <h3>Track your journey ! </h3>
    <div className="age-container">
    <div className="age-box">
    <h2>{age.years}</h2>
    <p>Years</p>
    </div>

     <div className="age-box">
    <h2>{age.months}</h2>
    <p>Months</p>
    </div>

    <div className="age-box">
    <h2>{age.days}</h2>
    <p>Days</p>
    </div>

    <div className="age-box">
   <h2>{age.hours}</h2>
    <p>Hours</p>
    </div>

        <div className="age-box">
          <h2>{age.minutes}</h2>
          <p>Minutes</p>
        </div>

        <div className="age-box">
          <h2>{age.seconds}</h2>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}
export default Age;