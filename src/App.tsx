import ArtistsPage from "./pages/Artists";
import SplashScreen from "./components/fragments/SplashScreen";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import ArtistDetailsPage from "./pages/ArtistDetails";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/artists/:id" element={<ArtistDetailsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
