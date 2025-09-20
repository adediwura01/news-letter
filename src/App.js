import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsLetter from "./NewsLetter";
import Success from "./Success";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsLetter />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}
