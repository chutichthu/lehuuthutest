import "./App.css";
import Profile from "./components/Profile";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <button>thong bao</button>

      <div className="hienthithongtin">
        <Profile
          name="Le Huu Thu"
          avatar="https://photo2.tinhte.vn/data/attachment-files/2023/10/8163654_photo-5779637817377403273-y.jpg"
        />
        <Profile
          name="Abcd"
          avatar="https://3.bp.blogspot.com/-d3fAkWVN6XU/VXaqRjAhg4I/AAAAAAAAAmE/XDtpzBPXPb0/s1600/hinh-nen-may-tinh-dep-nhat-ve-thien-nhien-2-1024x768.jpg"
        />
        <Profile
          name="Egh"
          avatar="https://photo2.tinhte.vn/data/attachment-files/2023/10/8152858_photo-5770253416914858357-y.jpg"
        />
      </div>
    </div>
  );
}
