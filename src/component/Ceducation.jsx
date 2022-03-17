import { mview2 } from "../state/modals.js";
import { useDispatch, useSelector } from "react-redux";
import { setceducation, setceducationL } from "../state/valores.js";
//import { EduLogica } from './funciones.js';
import { useEffect, useRef } from "react";

function Ceducation() {
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
  //  const count3 = useSelector((state) => state.modals.id2);
  const count5 = useSelector((state) => state.valor.CeducationL);

  useEffect(() => {
    if (count5 === "") {
      console.log(count5);
    } else {
      document.getElementById(count5).classList.add("active");
    }
    //eslint-disable-next-line
  }, []);

  function seteduvalor(e, v) {
    dispatch(setceducation(v));
    dispatch(setceducationL(e));
    /*console.log(e,v)
    for (let i = 0; i < 4; i++) {
      document.getElementById('ce' + (i + 1)).classList.remove('active');
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
        <div className="modal-content bg-p text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">Select Canadian Education Details</h5>
          </div>
          <div className="modal-body">
            <div className="d-grid gap-2">
              <button
                onClick={() => {
                  seteduvalor("ce1", 30);
                }}
                id="ce1"
                type="button"
                className="button button-primary default normal"
              >
                Masters Degree,{" "}
                <b>
                  or professional degree needed to practice in a licensed
                  profession
                </b>
              </button>
              <button
                onClick={() => {
                  seteduvalor("ce2", 30);
                }}
                id="ce2"
                type="button"
                className="button button-primary default normal"
              >
                Three years or longer <b>degree, diploma or certicate</b>
              </button>
              <button
                onClick={() => {
                  seteduvalor("ce3", 15);
                }}
                id="ce3"
                type="button"
                className="button button-primary default normal"
              >
                One or Two degree <b>, diploma or certicate</b>
              </button>
              <button
                id="ce4"
                onClick={() => {
                  seteduvalor("ce4", 0);
                }}
                type="button"
                className="button button-primary default normal"
              >
                Secondary diploma <b>(high school graduation) or None</b>
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

export default Ceducation;
