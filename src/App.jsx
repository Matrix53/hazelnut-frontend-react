import AppHeader from "components/global/AppHeader";
import AppContent from "components/global/AppContent";
import AppFooter from "components/global/AppFooter";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const showHeader = !(
    location.pathname === "/signin" || location.pathname === "/signup"
  );

  return (
    <>
      {showHeader && <AppHeader />}
      <AppContent />
      <AppFooter />
    </>
  );
}

export default App;
