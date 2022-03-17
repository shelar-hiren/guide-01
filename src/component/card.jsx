import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  return (
    <div
      onClick={props.onClick}
      className={`row justify-content-between align-items-center box-shadow p-3 mb-1 border border-white border-2 rounded-border ch bg-p ${props.styles}`}
    >
      <div className="col-auto">
        <div className="row align-items-center">
          <button
            className="col-auto m-2 d-flex justify-content-center align-items-center rounded-border button button-primary "
            style={{ width: "80px", height: "80px" }}
          >
            {props.type === "Marital Status" ? (
              <div>
                <img className="image-contain" src={props.ico} />
              </div>
            ) : (
              <FontAwesomeIcon className="fs-1 m-0" icon={props.ico} />
            )}
          </button>
          <div className="col-auto px-0">
            <p className="m-0 fw-bold text-secondary">{props.txt}</p>
          </div>
        </div>
      </div>
      <div className="col-auto p-0">
        <p className="m-0 text-secondary fw-bold">{props?.value?.toString()}</p>
      </div>
    </div>
  );
}

export default Card;
