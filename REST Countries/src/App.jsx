import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/:country" element={<CountryPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
