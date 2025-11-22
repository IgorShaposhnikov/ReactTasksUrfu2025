import '../App.css';

function Modal(props) {
  return (
    <div className="modal">
      <p>{props.text}</p>
      <div className="actions">
        <button className="btn btn--alt" onClick={props.onClose}>
          Cancel
        </button>
        <button className="btn" onClick={props.onClose}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Modal;