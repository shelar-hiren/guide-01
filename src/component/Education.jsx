import { mview2 } from "../state/modals.js";
import { useDispatch, useSelector } from "react-redux";
import { educationvalor, educationvalorL } from "../state/valores.js";
import { EduLogica } from "./funciones.js";
import { useEffect, useRef } from "react";

function Education() {
  const dispatch = useDispatch();
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
  const count3 = useSelector((state) => state.modals.id2);
  const count5 = useSelector((state) => state.valor.educationL);

  useEffect(() => {
    if (count5 === "") {
      console.log(count5);
    } else {
      document.getElementById(count5).classList.add("active");
    }
    //eslint-disable-next-line
  }, []);

  function seteduvalor(e, v) {
    dispatch(educationvalorL(e));
    dispatch(educationvalor(EduLogica(v, count3)));

    /*  for (let i = 0; i < 8; i++) {
      document.getElementById('e' + (i + 1)).classList.remove('active');
    }

    document.getElementById(e).classList.add('active');*/

    dispatch(mview2());
  }

  return (
    <div
      className="modal"
      style={{ display: "block", background: "#21004454", zIndex: 99999 }}
      tabIndex="-1"
    >
      <div className="modal-dialog" ref={ref}>
        <div className="modal-content bg-p">
          <div className="modal-header">
            <h5 className="modal-title text-secondary">
              Select your Education Details
            </h5>
          </div>
          <div className="modal-body modal-overflow">
            <div className="d-grid gap-2">
              <button
                onClick={() => {
                  seteduvalor("e1", 140);
                }}
                id="e1"
                type="button"
                className="btn-secondary button-primary button"
              >
                <p className="m-0">
                  {" "}
                  Doctoral level university degree <b>(PhD)</b>
                </p>
              </button>
              <button
                onClick={() => {
                  seteduvalor("e2", 135);
                }}
                id="e2"
                type="button"
                className="btn-secondary button-primary"
              >
                <p className="m-0">
                  Masters Degree,{" "}
                  <b>
                    or professional degree needed to practice in a licensed
                    profession
                  </b>
                </p>
              </button>
              <button
                onClick={() => {
                  seteduvalor("e3", 128);
                }}
                id="e3"
                type="button"
                className="btn-secondary button-primary"
              >
                <p className="m-0">
                  Two or more certificates,{" "}
                  <b>
                    diplomas or degrees. One must be for a program of three or
                    more years
                  </b>
                </p>
              </button>
              <button
                onClick={() => {
                  seteduvalor("e4", 120);
                }}
                id="e4"
                type="button"
                className="btn-secondary button-primary"
              >
                <p className="m-0">
                  Bachelor degree{" "}
                  <b>
                    or diploma for a program of three years or longer, or equal
                  </b>
                </p>
              </button>
              <button
                onClick={(e) => {
                  seteduvalor("e5", 98);
                }}
                id="e5"
                type="button"
                className="btn-secondary button-primary"
              >
                <p className="m-0">
                  Two-year program{" "}
                  <b>at a University, college, trade or technical school</b>
                </p>
              </button>
              <button
                onClick={() => {
                  seteduvalor("e6", 90);
                }}
                id="e6"
                type="button"
                className="btn-secondary button-primary"
              >
                <p className="m-0">
                  One-year program{" "}
                  <b>at a University, college, trade or technical school</b>
                </p>
              </button>
              <button
                id="e7"
                onClick={() => {
                  seteduvalor("e7", 30);
                }}
                type="button"
                className="btn-secondary button-primary"
              >
                <p className="m-0">
                  Secondary diploma <b>(high school graduation)</b>
                </p>
              </button>
              <button
                id="e8"
                onClick={() => {
                  seteduvalor("e8", 0);
                }}
                type="button"
                className="btn-secondary button-primary"
              >
                <p className="m-0">
                  None, <b>or less than secondary(high school)</b>
                </p>
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

export default Education;
