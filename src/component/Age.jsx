import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { agevalor, agevalorL } from "../state/valores.js";
import { mview2 } from "../state/modals.js";
import { logica } from "./funciones.js";
import CustomDatePick from "./Modals/customDatePicker.js";

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

  const dispatch = useDispatch();
  const onGetDate = (selectedDate) => {
    const date = moment(selectedDate).format("YYYY-MM-DD");
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
              <CustomDatePick onGetDate={onGetDate} />
            </div>
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
