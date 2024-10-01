import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
export default function SearchBar() {
  return (
    <div className="searchbox">
      <input className="search-bar" type="search" placeholder="Tìm kiếm" />
      <CiSearch className="search-icon" />
    </div>
  );
}
