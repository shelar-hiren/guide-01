import { mview2 } from "../state/modals.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setn1w, setn2w, setcheck, settotal } from "../state/work.js";
import { logicawork, logicawork2 } from "./funciones.js";

function Work() {
  const n1 = useSelector((state) => state.work.n1);
  const n2 = useSelector((state) => state.work.n2);
  const c = useSelector((state) => state.work.check);
  const count3 = useSelector((state) => state.modals.id2);
  const count = useSelector((state) => state.modals2.value);

  const dispatch = useDispatch();
  const [canadian, setCanadian] = useState(n1);
  const [foreign, setForeign] = useState(n2);
  const [m, setM] = useState(c);

  function ctotal() {
    //console.log(count);
    switch (count) {
      case "m1":
        if (count3 === "y1") {
          const a = logicawork2(canadian, foreign);
          dispatch(settotal(a));
          //console.log(a);
        } else {
          const a = logicawork(canadian, foreign);
          dispatch(settotal(a));
          // console.log(canadian, foreign);
        }
        break;
      case "m2":
        if (count3 === "y1") {
          const a = logicawork2(canadian, foreign);
          dispatch(settotal(a));
          //console.log(a);
        } else {
          const a = logicawork(canadian, foreign);
          dispatch(settotal(a));
          //console.log(a);
        }
        break;
      default:
        const a = logicawork(canadian, foreign);
        dispatch(settotal(a));
    }
  }

  useEffect(() => {
    ctotal();
    //eslint-disable-next-line
  }, [canadian, foreign]);

  function validandocanadian() {
    switch (canadian) {
      case "1":
        return "year";
        //eslint-disable-next-line
        break;
      case "2":
        return "years";
        //eslint-disable-next-line
        break;
      case "3":
        return "years";
        //eslint-disable-next-line
        break;
      case "4":
        return "years";
        //eslint-disable-next-line
        break;
      case "5":
        return "or more years";
        //eslint-disable-next-line
        break;
      default:
        return "";
    }
  }

  function foreigncanadian() {
    switch (foreign) {
      case "1":
        return "year";
        //eslint-disable-next-line
        break;
      case "2":
        return "years";
        //eslint-disable-next-line
        break;
      case "3":
        return "or more years";
        //eslint-disable-next-line
        break;
      default:
        return "";
    }
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
            <h5 className="modal-title">Work Experience</h5>
          </div>
          <div className="modal-body">
            <p className="fw-bold">Canadian Work Experience</p>
            <p className="m-0">
              {canadian} {validandocanadian()}
            </p>
            <input
              onChange={(e) => {
                setCanadian(e.target.value);
                dispatch(setn1w(e.target.value));
              }}
              type="range"
              min="0"
              max="5"
              step="1"
              value={canadian}
              className="form-range"
            />
            <p className="fw-bold mt-4">Foreign Work Experience</p>
            <p className="m-0">
              {foreign} {foreigncanadian()}
            </p>
            <input
              onChange={(e) => {
                setForeign(e.target.value);
                dispatch(setn2w(e.target.value));
              }}
              value={foreign}
              type="range"
              min="0"
              max="3"
              step="1"
              className="form-range"
            />

            <div className="form-check mt-4">
              <input
                onChange={(e) => {
                  //console.log(e.target.checked);
                  setM(e.target.checked);
                  dispatch(setcheck(e.target.checked));
                }}
                className="form-check-input"
                type="checkbox"
                checked={m}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Do you have a certificate of qualification from a canadian
                province or territory?
              </label>
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

export default Work;
