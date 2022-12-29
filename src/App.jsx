import LoginPage from "./pages/LoginPage";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./styles/app.scss";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/register" element={<SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
