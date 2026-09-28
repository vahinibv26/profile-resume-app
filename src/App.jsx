import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

import Home from "./pages/Home";
import UserInput from "./pages/UserInput";
import Greeting from "./pages/Greeting";
import Age from "./pages/Age";
import Resume from "./pages/Resume";

import { ProfileProvider } from "./Context/ProfileContext";

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>

        <Routes>

          
          <Route path="/" element={<Home />} />

       
          <Route
            path="/UserInput"
            element={
              <div className="app-layout">
                <Sidebar />
                <main className="main-content">
                  <UserInput />
                </main>
              </div>
            }
          />

          <Route
            path="/greeting"
            element={
              <div className="app-layout">
                <Sidebar />
                <main className="main-content">
                  <Greeting />
                </main>
              </div>
            }
          />

          <Route
            path="/age"
            element={
              <div className="app-layout">
                <Sidebar />
                <main className="main-content">
                  <Age />
                </main>
              </div>
            }
          />

          <Route
            path="/resume"
            element={
              <div className="app-layout">
                <Sidebar />
                <main className="main-content">
                  <Resume />
                </main>
              </div>
            }
          />

        </Routes>

      </BrowserRouter>
    </ProfileProvider>
  );
}

export default App;