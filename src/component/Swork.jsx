import { mview2 } from "../state/modals.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { setswork, setsworkv } from "../state/valores.js";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

function Swork() {
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
  const count = useSelector((state) => state.valor.Swork);
  const [data, setData] = useState(count);

  function validandocanadian() {
    switch (data) {
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

  function totales() {
    switch (data) {
      case "1":
        dispatch(setsworkv(5));
        //eslint-disable-next-line
        break;
      case "2":
        dispatch(setsworkv(7));
        //eslint-disable-next-line
        break;
      case "3":
        dispatch(setsworkv(8));
        //eslint-disable-next-line
        break;
      case "4":
        dispatch(setsworkv(9));
        //eslint-disable-next-line
        break;
      case "5":
        dispatch(setsworkv(10));
        //eslint-disable-next-line
        break;
      default:
        dispatch(setsworkv(0));
    }
  }

  useEffect(() => {
    totales();
    //eslint-disable-next-line
  }, [data]);

  return (
    <div
      className="modal"
      style={{ display: "block", background: "#21004454", zIndex: 9999 }}
      tabIndex="-1"
    >
      <div className="modal-dialog" ref={ref}>
        <div className="modal-content bg-p text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">Spouse Canadian Work Experience</h5>
          </div>
          <div className="modal-body">
            <p className="m-0 mt-3">
              {data} {validandocanadian()}
            </p>
            <Slider
              id="sworkex"
              min={0}
              max={5}
              value={data}
              onChangeStart={() => {}}
              onChange={(value) => {
                setData(`${value}`);
                dispatch(setswork(`${value}`));
                totales();
              }}
              onChangeComplete={() => {}}
              step={1}
            />
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

export default Swork;
