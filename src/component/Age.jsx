import { mview2 } from "../state/modals.js";
import { agevalor, agevalorL } from "../state/valores.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { logica } from "./funciones.js";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";
import moment from "moment";
function Age() {
  const count3 = useSelector((state) => state.modals.id2);
  //const count4 = useSelector((state) => state.valor.age);
  const count5 = useSelector((state) => state.valor.ageL);
  const ref = useRef();
  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }
  useOnClickOutside(ref, () => dispatch(mview2()));
  useEffect(() => {
    document.getElementById("entrada").value = count5;
  }, [count5]);

  const dispatch = useDispatch();
  const onChange = (jsDate, dateString) => {
    const date = moment(jsDate).format("YYYY-MM-DD");
    const year = new Date();
    const y = parseInt(year.getFullYear() - date.substr(0, 4));
    dispatch(agevalor(logica(y.toString(), count3)));
    dispatch(agevalorL(date));
  };
  return (
    <div
      className="modal"
      style={{ display: "block", background: "#21004454", zIndex: 99999 }}
      tabIndex="-1"
    >
      <div className="modal-dialog" ref={ref}>
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
