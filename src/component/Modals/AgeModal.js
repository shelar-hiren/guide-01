import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { setAgeValue } from "../../state/score";
import { useDispatch, useSelector } from "react-redux";
import { logica } from "../funciones";

const AgeModal = ({ close, submitModal }) => {
  const { ageValue } = useSelector((state) => state.Score);
  const [dateOfBirth, setDateOfBirth] = useState(ageValue);
  const dispatch = useDispatch();
  const saveDOB = () => {
    if (dateOfBirth) {
      const date = moment(dateOfBirth).format("YYYY-MM-DD");
      const year = new Date();
      const y = parseInt(year.getFullYear() - date.substr(0, 4));
      submitModal({ type: "age", data: logica(y.toString()) });
      dispatch(setAgeValue(logica(y.toString())));
    } else {
      alert("Please select date");
    }
  };
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", background: "#21004454", zIndex: 5 }}
    >
      <div className="modal-dialog">
        <div className="modal-content bg-p">
          <div className="modal-header">
            <h5 className="modal-title text-secondary">
              Select your date of birth
            </h5>
          </div>
          <div className="modal-body">
            <DatePicker
              placeholderText="Select or type DOB (MM/DD/YYYY)"
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
            />
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
