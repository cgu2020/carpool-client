import "../index.css";
import Navbar from "./Main/Navbar";
import Rides from "./Main/Rides";
import Pagination from "./Main/Pagination";
import Searchbar from "./Main/Searchbar";
import Modal from "./Main/Modal";
import { useState } from "react";
import "./auth/firebaseConfig.js";
import "./auth/googleAuth.js";

function App() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div>
      <Navbar modalButton={openModal} />
      <div className="m-8">
        <Searchbar />
        <Rides />
      </div>
      <Modal open={open} setOpen={openModal} />
      <div className="flex items-center justify-center"></div>
      <a
        className="fixed right-5 bottom-5 rounded-full bg-red-400 h-20 w-20 sm:hidden hover:bg-red-300 transform duration-200"
        onClick={() => openModal()}
      ></a>
    </div>
  );
}

export default App;
