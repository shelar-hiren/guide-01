import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { setAgeValue } from "../../state/score";
import { useDispatch, useSelector } from "react-redux";
import { DatePickerInput } from "rc-datepicker";
import "rc-datepicker/lib/style.css";

import { logica } from "../funciones";

const AgeModal = ({ close, submitModal }) => {
  const { ageValue } = useSelector((state) => state.Score);
  const [dateOfBirth, setDateOfBirth] = useState(ageValue);
  const dispatch = useDispatch();
  useEffect(() => {
    document.getElementById("entrada").value = dateOfBirth;
  }, [dateOfBirth]);

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

  const onChange = (jsDate) => {
    const date = moment(jsDate).format("YYYY-MM-DD");
    setDateOfBirth(date);
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
            <div>
              <DatePickerInput
                type="date"
                format="YYYY/MM/DD"
                id="entrada"
                className="my-custom-datepicker-component"
                onChange={onChange}
              />
            </div>
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
