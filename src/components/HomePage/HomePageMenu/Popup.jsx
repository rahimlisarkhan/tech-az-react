import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Popup = () => {

  const [editmode,setEditMode] = useState(false);

  return (
    !editmode ?
    <div className="form-popup">
      <div className="form-popup__window">
        <h1>
          Thank you for joining us! <br />
          We will contact you shortly..
        </h1>
        <AiOutlineCloseCircle className="popup-close"
                              onClick={() => setEditMode(!editmode)  }/>
      </div>
    </div>
    :''
  );
};

export default Popup;
