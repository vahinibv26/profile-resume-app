import PageNavigation from "./NavigationButtons";
import "./Sidebar.css"
function Sidebar() {
  return (  
    <div className="sidebar">
      <h2>MENU</h2>
      <div className="menu-item">🏠 Home</div>
      <div className="menu-item">👤 Profile</div>
      <div className="menu-item">📄 Resume</div>
      <PageNavigation />
    </div>    
  );
}
 export default Sidebar;