import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Profile from "@/components/Profile";
import History from "@/components/History";
import Numbers from "@/components/Numbers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Profile />
        <History />
        <Numbers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
