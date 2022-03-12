import { mview2 } from "../state/modals.js";
import { agevalor, agevalorL } from "../state/valores.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logica } from "./funciones.js";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import moment from "moment";
function Age() {
  const count3 = useSelector((state) => state.modals.id2);
  //const count4 = useSelector((state) => state.valor.age);
  const count5 = useSelector((state) => state.valor.ageL);

  useEffect(() => {
    document.getElementById("entrada").value = count5;
  }, [count5]);

  const dispatch = useDispatch();
  const onChange = (jsDate, dateString) => {
    console.log({ jsDate, dateString });
    const date = moment(jsDate).format("YYYY-MM-DD");
    const year = new Date();
    const y = parseInt(year.getFullYear() - date.substr(0, 4));
    console.log({ y: date });
    dispatch(agevalor(logica(y.toString(), count3)));
    dispatch(agevalorL(date));
  };
  return (
    <div
      className="modal"
      style={{ display: "block", background: "#21004454", zIndex: 5 }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-p">
          <div className="modal-header">
            <h5 className="modal-title text-secondary">Your age</h5>
          </div>
          <div className="modal-body">
            <div>
              <DatePickerInput
                type="date"
                format="YYYY/MM/DD"
                id="entrada"
                className="my-custom-datepicker-component"
                onChange={onChange}
              />
            </div>

            <label htmlFor="">Enter your date of birth</label>
            {/* <input
              id="entrada"
              onChange={(e) => {
                // 
                dispatch(agevalor(logica(e.target.value, count3)));
                dispatch(agevalorL(e.target.value));
              }}
              type="number"
              className="bg-p form-control"
              placeholder="18"
            />{' '}
            <label className="text-secondary">
              Valid age range: from 18 to 45 years
          </label>*/}
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

export default Age;
