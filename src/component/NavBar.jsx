import logo from "/witLogo.png";
import { PrimaryButton } from "./primaryButton";

export function NavBar() {
  return (
    <div className="navbar bg-transparent shadow-sm absolute z-20">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <img
            src={logo}
            alt="ACE Logo"
            className="-translate-x-4 mb-2 h-[3rem] w-[2.781rem] sm:h-20 sm:w-20 sm:mt-8"
          />
        </a>
        <h2 className="tracking-[0.5em] font-bold text-lg">W I T</h2>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
