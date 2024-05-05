import { useState } from "react";
import Modal from "./Modal";
import "../App.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
      } else {
        dataArray = await contract.display(account);
      }
      console.log(dataArray);
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");

      const images = str_array.map((item, i) => {
        console.log(item.substring(6), i);
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={item}
              className="image-list"
              crossOrigin="anonymous"
              alt="current user's data"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <div className="img">
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <div className="container">
        <button className="center button" onClick={getdata}>
          Get Data
        </button>
        {!modalOpen && (
          <button className="share" onClick={() => setModalOpen(true)}>
            Share
          </button>
        )}
        {modalOpen && (
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} contract={contract}></Modal>
        )}
      </div>
    </div>
  );
};
export default Display;
