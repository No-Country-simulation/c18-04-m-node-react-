import {FrontComponents} from "@c18-04-m-node-react/front-components";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";

export function App() {
  return (
    <Routes >
      <Route path="/" element={<FrontComponents />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
