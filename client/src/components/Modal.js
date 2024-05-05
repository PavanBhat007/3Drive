import { useEffect } from "react";
import "../App.css";

const Modal = ({ setModalOpen, contract }) => {
  const handleSubmit = async (e) => {
    const address = e.target[0].value;
    await contract.allow(address);
    setModalOpen(false);
    e.preventDefault();
  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      const members = addressList;
      console.log(members);
      let accessList = document.getElementById("access-list");
      for (let i = 0; i < members.length; i++) {
        let member = members[i];

        let memberField = document.createElement("p");
        memberField.textContent = member[0];
        accessList.appendChild(memberField);
      }
    };
    contract && accessList();
  }, [contract]);

  return (
    <div className="modal-bg">
      <div className="modal-container" id="modal">
        <div className="header">
          <h2>SHARE WITH OTHER ACCOUNTS</h2>
          <button onClick={() => setModalOpen(false)}>
            &times;
          </button>
        </div>
        <div className="body">
        </div>
        <form id="form" onSubmit={handleSubmit}>
          <div className="sharing">
            <input
              type="text"
              className="address-inp"
              placeholder="Enter Address"
            />
            <button type="submit" className="share-share-btn">Share</button>
          </div>
          <hr/>
          <h3>Access List</h3>
          <div id="access-list"></div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
