import { mview2 } from '../state/modals.js';
import { agevalor, agevalorL } from '../state/valores.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logica } from './funciones.js';

function Calculator() {
  const count3 = useSelector((state) => state.modals.id2);
  //const count4 = useSelector((state) => state.valor.age);
  const count5 = useSelector((state) => state.valor.ageL);

  useEffect(() => {
    document.getElementById('entrada').value = count5;
  }, [count5]);

  const dispatch = useDispatch();

  return (
    <div
      className="modal"
      style={{ display: 'block', background: '#21004454', zIndex: 5 }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-p">
          <div className="modal-header">
            <h5 className="modal-title text-secondary">Your Calculator</h5>
          </div>
          <div className="modal-body">
            <input
              id="entrada"
              type="date"
              className="form-control"
              onChange={(e) => {
                const year = new Date();
                const y = parseInt(
                  year.getFullYear() - e.target.value.substr(0, 4)
                );
                  console.log({ y})
                dispatch(agevalor(logica(y.toString(), count3)));
                dispatch(agevalorL(e.target.value));
              }}
            />
      <label htmlFor="">Enter your date of birth</label>
          
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

export default Calculator;