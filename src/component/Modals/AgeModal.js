import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import { setAgeValue, setSelectedDate } from "../../state/score";
import { useDispatch, useSelector } from "react-redux";
import { logica } from "../funciones";
import CustomDatePick from "./customDatePicker";

const AgeModal = ({ close, submitModal }) => {
  const ref = useRef();

  const { ageValue, selectedDate } = useSelector((state) => state.Score);
  const [dateOfBirth, setDateOfBirth] = useState(
    moment(selectedDate).format("YYYY-MM-DD")
  );
  const dispatch = useDispatch();

  const onGetDate = (selectedDate) => {
    const date = moment(selectedDate).format("YYYY-MM-DD");
    setDateOfBirth(date);
    dispatch(setSelectedDate(selectedDate));
  };
  const saveDOB = () => {
    if (dateOfBirth) {
      const year = new Date();
      const y = parseInt(year.getFullYear() - dateOfBirth.substr(0, 4));
      submitModal({ type: "age", data: logica(y.toString()) });
      dispatch(setAgeValue(logica(y.toString())));
    } else {
      alert("Please select date");
    }
  };

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
  useOnClickOutside(ref, () => close());

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", background: "#21004454", zIndex: 9999 }}
    >
      <div className="modal-dialog" ref={ref}>
        <div className="modal-content bg-p">
          <div className="modal-header">
            <h5 className="modal-title text-secondary">
              Select your date of birth
            </h5>
          </div>

          <div className="modal-body">
            <CustomDatePick selectedDate={selectedDate} onGetDate={onGetDate} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={close}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={saveDOB}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgeModal;
