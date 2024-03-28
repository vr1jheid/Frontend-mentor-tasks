import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import CountryPage from "./pages/CountryPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/:country" element={<CountryPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
