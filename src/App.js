import "./App.css";
import Header from "./MyComponents/header.js";
import { Footer } from "./MyComponents/footer.js";
import { Todos } from "./MyComponents/todos.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./MyComponents/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Todos />
                <div class="buttons-container">
                  <a href="#" class="button button-primary">
                    Sports
                  </a>
                  <a href="#" class="button button-secondary">
                    Gym
                  </a>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
