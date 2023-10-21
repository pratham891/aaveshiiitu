import Header from "../../COMPONENTS/HEADER/Header";
import Hero from "./HERO/Hero";
import About from "./ABOUT US/About";
import Blog from "./BLOG/Blog";
import JoinUs from "./JOIN US/JoinUs";
import Contact from "./Contact/Contact";
import Footer from "../../COMPONENTS/FOOTER/Footer";

const Home = () => {
  return (
    <>
      <section><Header /></section>
      <section><Hero /></section>
      <section><About /></section>
      <section><Blog /></section>
      <section><JoinUs /></section>
      <section><Contact /></section>
      <section><Footer /></section>
    </>
  );
}

export default Home;
