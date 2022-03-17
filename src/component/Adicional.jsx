import { mview2 } from "../state/modals.js";
import { useDispatch, useSelector } from "react-redux";
import { sets1, sets2, sets3, settotal } from "../state/Ad.js";
import { useEffect, useRef } from "react";

function Adicional() {
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
  const sp = useSelector((state) => state.ad.s1);
  const sp2 = useSelector((state) => state.ad.s2);
  const sp3 = useSelector((state) => state.ad.s3);

  function logica() {
    // console.log(sp + ":" + sp2 + ":" + sp3);
    switch (sp + ":" + sp2 + ":" + sp3) {
      case "aaa1:false:false":
        return 200;
        //eslint-disable-next-line
        break;
      case "aaa2:false:false":
        return 50;
        //eslint-disable-next-line
        break;
      case "aaa1:false:":
        return 200;
        //eslint-disable-next-line
        break;
      case "aaa2:false:":
        return 50;
        //eslint-disable-next-line
        break;
      case "aaa1::":
        return 200;
        //eslint-disable-next-line
        break;
      case "aaa2::":
        return 50;
        //eslint-disable-next-line
        break;
      case "aaa1:true:false":
        return 215;
        //eslint-disable-next-line
        break;
      case "aaa2:true:false":
        return 65;
        //eslint-disable-next-line
        break;
      case "aaa1:true:":
        return 215;
        //eslint-disable-next-line
        break;
      case "aaa2:true:":
        return 65;
        //eslint-disable-next-line
        break;
      case "::true":
        return 600;
        //eslint-disable-next-line
        break;
      case "aaa1::true":
        return 600;
        //eslint-disable-next-line
        break;
      case "aaa2::true":
        return 600;
        //eslint-disable-next-line
        break;
      case "aaa1:false:true":
        return 600;
        //eslint-disable-next-line
        break;
      case "aaa2:false:true":
        return 600;
        //eslint-disable-next-line
        break;
      case "aaa1:true:true":
        return 600;
        //eslint-disable-next-line
        break;
      case "aaa2:true:true":
        return 600;
        //eslint-disable-next-line
        break;
      case ":true:true":
        return 600;
        //eslint-disable-next-line
        break;
      case ":false:true":
        return 600;
        //eslint-disable-next-line
        break;
      default:
        return 0;
    }
  }

  function ch(e) {
    // console.log(e.id);
    dispatch(sets1(e.id));
    logica();
  }

  function ch1(e) {
    // console.log(e.checked);
    dispatch(sets2(e.checked));
    logica();
  }

  function ch2(e) {
    // console.log(e.checked);
    dispatch(sets3(e.checked));
    logica();
  }

  useEffect(() => {
    if (!(sp === "")) {
      document.getElementById(sp).checked = true;
    }
    document.getElementById("aaa3").checked = sp2;
    document.getElementById("aaa4").checked = sp3;
    let r = logica();
    //  console.log(r)
    dispatch(settotal(r));
    //eslint-disable-next-line
  }, [sp, sp2, sp3]);

  return (
    <div
      className="modal"
      style={{ display: "block", background: "#21004454", zIndex: 9999 }}
      tabIndex="-1"
    >
      <div className="modal-dialog" ref={ref}>
        <div className="modal-content bg-p text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">Additional Points</h5>
          </div>
          <div className="modal-body">
            <p>
              Do you have a Labour Market Assessment(LMIA) <b>job offer</b>
            </p>
            <div className="form-check">
              <input
                onChange={(e) => {
                  ch(e.target);
                }}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="aaa1"
              />
              <label className="form-check-label" htmlFor="aaa1">
                <b>NOC-OO</b>
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => {
                  ch(e.target);
                }}
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="aaa2"
              />
              <label className="form-check-label" htmlFor="aaa2">
                <b>NOC-O/A/B</b>
              </label>
            </div>{" "}
            <div className="mt-4">
              <div className="form-check">
                <input
                  onChange={(e) => {
                    ch1(e.target);
                  }}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="aaa3"
                />
                <label className="form-check-label" htmlFor="aaa3">
                  Do you have a real/step brother or sister living in Canada who
                  is a citizen or permanent resident of Canada?
                </label>
              </div>
              <div className="form-check">
                <input
                  onClick={(e) => {
                    ch2(e.target);
                  }}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="aaa4"
                />
                <label className="form-check-label" htmlFor="aaa4">
                  Do you have a letter of nomination from a province or
                  Territory
                </label>
              </div>
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

export default Adicional;
