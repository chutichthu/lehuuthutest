import SearchBar from "./SearchBar";
import "./Navbar.css";
import { useState } from "react";
export default function NavBar() {
  const [Buttondangnhap, setButtondangnhap] = useState(false);

  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <img
            className="logo-dragon"
            href="/"
            src="https://art.ngfiles.com/images/5586000/5586718_646127_doffu0000_untitled-5586718.2f3f82f92ac8334be7c9d12e719eb05b.webp?f1712188687"
            alt=""
          />
        </a>
        <SearchBar />
        <button
          onClick={() => setButtondangnhap(!Buttondangnhap)}
          className="dangnhap"
        >
          Đăng nhập
        </button>
      </header>

      {Buttondangnhap && (
        <div className="login-container">
          <div className="button-dangnhap">
            Đăng nhập <br />
            <input
              className="ten-dangnhap"
              type="search"
              placeholder="Tên đăng nhập"
            />
            <br />
            <input className="mat-khau" type="search" placeholder="Mật khẩu" />
          </div>
        </div>
      )}
    </div>
  );
}
