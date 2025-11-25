import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.tsx";

import Login from "./pages/Login.tsx";
import Feed from "./pages/Feed.tsx";
// import NewAnimal from "../pages/NewAnimal.jsx"; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50"> 
      <Header />

      <main className="p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/novo-animal" element={<NewAnimal />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;