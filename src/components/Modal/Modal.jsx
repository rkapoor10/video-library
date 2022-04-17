import "./modal.css";


const Modal = ({children,openModal, setOpenModal, heading}) => {
  return (
    openModal ? (
      <div
        id="modal-bg"
        className="modal-background"
        onClick={() => setOpenModal(false)}
      >
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="closeBtnContainer">
            <button onClick={() => setOpenModal(false)}>X</button>
          </div>
          <h3 className="title">{heading}</h3>
         
            {children}
         

        </div>
      </div>
    ):<></>
  );
};

export default Modal
