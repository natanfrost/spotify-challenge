import ArtistsPage from "./pages/Artists";
import SplashScreen from "./components/fragments/SplashScreen";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/artists" element={<ArtistsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
