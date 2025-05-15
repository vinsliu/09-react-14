import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
