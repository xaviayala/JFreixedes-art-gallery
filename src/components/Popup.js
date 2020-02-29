import React from "react";
import Modal from "react-responsive-modal";


const Popup = () => { 
    
    const [open, setOpen] = React.useState(false);
    
    return (
      <div>
        <button onClick={() => setOpen(true)}>
          Open centered modal
        </button>
    
        <Modal open={open} onClose={() => setOpen(false)} center>
          <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
      </div>
    );
}

export default Popup;