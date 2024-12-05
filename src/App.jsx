import "./index.css";
import Hero from "./MainPage/Hero";
import Nav from "./MainPage/Nav";
import Hero1 from "./Profile/Hero1";
import Nav1 from "./Profile/Nav1";
import { Routes, Route } from "react-router-dom";
import Project from "./Profile/Project";
import Footer from "./MainPage/Footer";
import Footer1 from "./Profile/Footer1";
import Nav2 from "./Contact/Nav2";
import Hero2 from "./Contact/Hero2";
import Body2 from "./Contact/Body2";
import Footer2 from "./Contact/Footer2";
import Nav3 from "./About/Nav3";
import Hero3 from "./About/Hero3";
import Footer3 from "./About/Footer3";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

function MainPage() {
  return (
    <section className="scrollable">
      <section>
        <Nav />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}

function Profile() {
  return (
    <section className="scrollable">
      <section>
        <Nav1 />
      </section>
      <section>
        <Hero1 />
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Footer1 />
      </section>
    </section>
  );
}

function Contact() {
  return (
    <section className="scrollable">
      <section>
        <Nav2 />
      </section>
      <section>
        <Hero2 />
      </section>
      <section>
        <Body2 />
      </section>
      <section>
        <Footer2 />
      </section>
    </section>
  );
}

function About() {
  return (
    <section>
      <section>
        <Nav3 />
      </section>
      <section>
        <Hero3 />
      </section>
      <section>
        <Footer3 />
      </section>
    </section>
  );
}
