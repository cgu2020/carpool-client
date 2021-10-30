import "../index.css";
import Navbar from "./Main/Navbar";
import Rides from "./Main/Rides";
import Pagination from "./Main/Pagination";
import Searchbar from "./Main/Searchbar";
import firebase from "firebase";
import "./auth/firebaseConfig.js";
import "./auth/googleAuth.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="m-8">
        <Searchbar />
        <Rides />
      </div>
      <div className="flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
}

export default App;
