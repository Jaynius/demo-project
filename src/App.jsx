import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpsPage from "./pages/NewMeetUps";
import FavouriteMeetUpsPage from "./pages/FavouriteMeetUps";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllMeetUpsPage />} />

          <Route path="/new-meetups" element={<NewMeetUpsPage />} />
          <Route path="/favourites" element={<FavouriteMeetUpsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
