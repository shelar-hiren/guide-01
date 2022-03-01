import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  console.log({ props })
  return (
    <div
      onClick={props.onClick}
      className={`row justify-content-between align-items-center shadow p-3 mb-1 border border-white border-2 rounded ch bg-p ${props.styles}`}
    >
      {/* <img
        src="https://via.placeholder.com/150"
        alt="ty"
        style={{ height: '150px' }}
      />
      <div className="card-body">
        <div className="row justify-content-between">
          <div className="col-auto">
            {' '}
            <p className="card-text">{props.txt}</p>{' '}
          </div>

          <div className="col-auto">
            <p className="card-text">{props.value.toString()}</p>
          </div>
        </div>
      </div>*/}
      <div className="col-auto">
        <div className="row align-items-center">
          <div
            className="col-auto m-2 d-flex justify-content-center align-items-center rounded"
            style={{ background: '#dee2e4', width: '80px', height: '80px' }}
          >
            <FontAwesomeIcon
              className="text-secondary fs-1 m-0"
              icon={props.ico}
            />
          </div>
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
