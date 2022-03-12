import { mview2 } from '../state/modals.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setswork, setsworkv } from '../state/valores.js';

function Swork() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.valor.Swork);
  const [data, setData] = useState(count);

  function validandocanadian() {
    switch (data) {
      case '1':
        return 'year';
        //eslint-disable-next-line
        break;
      case '2':
        return 'years';
        //eslint-disable-next-line
        break;
      case '3':
        return 'years';
        //eslint-disable-next-line
        break;
      case '4':
        return 'years';
        //eslint-disable-next-line
        break;
      case '5':
        return 'or more years';
        //eslint-disable-next-line
        break;
      default:
        return '';
    }
  }

  function totales() {
    switch (data) {
      case '1':
        dispatch(setsworkv(5));
        //eslint-disable-next-line
        break;
      case '2':
        dispatch(setsworkv(7));
        //eslint-disable-next-line
        break;
      case '3':
        dispatch(setsworkv(8));
        //eslint-disable-next-line
        break;
      case '4':
        dispatch(setsworkv(9));
        //eslint-disable-next-line
        break;
      case '5':
        dispatch(setsworkv(10));
        //eslint-disable-next-line
        break;
      default:
        dispatch(setsworkv(0));
    }
  }

  useEffect(() => {
    totales();
      //eslint-disable-next-line
  }, [data]);

  return (
    <div
      className="modal"
      style={{ display: 'block', background: '#21004454', zIndex: 5 }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-p text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">Spouse Canadian Work Experience</h5>
          </div>
          <div className="modal-body">
            <p className="m-0 mt-3">
              {data} {validandocanadian()}
            </p>
            <input
              onChange={(e) => {
                setData(e.target.value);
                dispatch(setswork(e.target.value));
                totales();
              }}
              value={data}
              type="range"
              min="0"
              max="5"
              step="1"
              className="form-range mb-3"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {
                dispatch(mview2());
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Swork;
