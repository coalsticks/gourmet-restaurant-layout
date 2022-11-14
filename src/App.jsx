import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";


export default function App() {
  return (
    <div className=" h-screen">
      <div className="flex flex-col h-full">
      <Banner text="A Big Midwestern Heart in the Heart of the Midwest" />
        <div className="hero-bg-image h-full">
          {/* OVERLAY */}
          <div className="flex flex-col w-full h-full bg-black/50 ">
            <NavBar />
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}
