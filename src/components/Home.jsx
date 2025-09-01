import Navbar from "./Navbar";
import Menu from "./Menu";
import "../style/Home.css";

export default function () {
  return (
    <div className="home container">
      <Navbar />
      <Menu />
    </div>
  );
}
