import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div>
      <header id="header">
        <img src={logo}></img>
        <h1>Invesment Calculator</h1>
      </header>
    </div>
  );
}
