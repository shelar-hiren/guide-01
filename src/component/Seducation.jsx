import { mview2 } from "../state/modals.js";
import { useDispatch, useSelector } from "react-redux";
import { setseducationL, setseducation } from "../state/valores.js";
//import { EduLogica } from './funciones.js';
import { useEffect } from "react";

function Seducation() {
  const dispatch = useDispatch();
  //  const count3 = useSelector((state) => state.modals.id2);
  const count5 = useSelector((state) => state.valor.SeducationL);

  useEffect(() => {
    if (count5 === "") {
      //console.log(count5);
    } else {
      document.getElementById(count5).classList.add("active");
    }
    //eslint-disable-next-line
  }, []);

  function seteduvalor(e, v) {
    dispatch(setseducationL(e));
    dispatch(setseducation(v));

    /*  for (let i = 0; i < 8; i++) {
      document.getElementById('e' + (i + 1)).classList.remove('active');
    }

    document.getElementById(e).classList.add('active');*/
    //console.log(e,"Spouse")
    dispatch(mview2());
  }

  return (
    <div
      className="modal"
      style={{ display: "block", background: "#21004454", zIndex: 9999 }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-p text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">Select your Education Details</h5>
          </div>
          <div className="modal-body">
            <div className="d-grid gap-2">
              <button
                onClick={() => {
                  seteduvalor("se1", 10);
                }}
                id="se1"
                type="button"
                className="btn-secondary button-primary"
              >
                Doctoral level university degree <b>(PhD)</b>
              </button>
              <button
                onClick={() => {
                  seteduvalor("se2", 10);
                }}
                id="se2"
                type="button"
                className="btn-secondary button-primary"
              >
                Masters Degree,{" "}
                <b>
                  or professional degree needed to practice in a licensed
                  profession
                </b>
              </button>
              <button
                onClick={() => {
                  seteduvalor("se3", 9);
                }}
                id="se3"
                type="button"
                className="btn-secondary button-primary"
              >
                Two or more certificates,{" "}
                <b>
                  diplomas or degrees. One must be for a program of three or
                  more years
                </b>
              </button>
              <button
                onClick={() => {
                  seteduvalor("se4", 8);
                }}
                id="se4"
                type="button"
                className="btn-secondary button-primary"
              >
                Bachelor degree{" "}
                <b>
                  or diploma for a program of three years or longer, or equal
                </b>
              </button>
              <button
                onClick={(e) => {
                  seteduvalor("se5", 7);
                }}
                id="se5"
                type="button"
                className="btn-secondary button-primary"
              >
                Two-year program{" "}
                <b>at a University, college, trade or technical school</b>
              </button>
              <button
                onClick={() => {
                  seteduvalor("se6", 6);
                }}
                id="se6"
                type="button"
                className="btn-secondary button-primary"
              >
                One-year program{" "}
                <b>at a University, college, trade or technical school</b>
              </button>
              <button
                id="se7"
                onClick={() => {
                  seteduvalor("se7", 2);
                }}
                type="button"
                className="btn-secondary button-primary"
              >
                Secondary diploma <b>(high school graduation)</b>
              </button>
              <button
                id="se8"
                onClick={() => {
                  seteduvalor("se8", 0);
                }}
                type="button"
                className="btn-secondary button-primary"
              >
                None, <b>or less than secondary(high school)</b>
              </button>
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

export default Seducation;
