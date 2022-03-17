import { useDispatch, useSelector } from "react-redux";
import { mview2, saveid } from "../state/modals.js";
import { opciones } from "../state/modals2.js";
import { setvd1, setvd2 } from "../state/state_idioma.js";
import { useEffect, useRef } from "react";
import { logica, EduLogica, logicawork, logicawork2 } from "./funciones.js";
import { agevalor, educationvalor, setsm } from "../state/valores.js";
import { settotal } from "../state/work.js";

function Modal() {
  const dispatch = useDispatch();

  //const [h, setH] = useState(0);
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

  const valorE = useSelector((state) => state.valor.education);
  const ids = useSelector((state) => state.modals.id);
  const ids2 = useSelector((state) => state.modals.id2);

  const count5 = useSelector((state) => state.valor.ageL);

  const canadian = useSelector((state) => state.work.n1);
  const foreign = useSelector((state) => state.work.n2);

  function ctotal(s) {
    if (s) {
      const a = logicawork2(canadian, foreign);
      dispatch(settotal(a));
      //console.log(a);
    } else {
      const a = logicawork(canadian, foreign);
      dispatch(settotal(a));
      //console.log(a);
    }
  }

  function activo(e, s) {
    // console.log(e.id);
    dispatch(saveid(e.id));
    dispatch(opciones(e.id));
    //console.log(ids);
    /*    for (let i = 0; i < 7; i++) {
      //console.log("m"+(i+1))
      document.getElementById('m' + (i + 1)).classList.remove('active');
    }*/

    //e.classList.add('active');
    //console.log(ids2, count5);

    if (s) {
      dispatch(agevalor(logica(count5, "y2")));
      dispatch(educationvalor(EduLogica(valorE, "y2")));
      //console.log('no');
      dispatch(setvd1(0));
      dispatch(setvd2(0));
      ctotal(!true);
      dispatch(setsm("y2"));
    } else {
      //console.log('yes');

      dispatch(setsm("y1"));
      if (ids2 === "y1") {
        document.querySelectorAll(".row.ch")[1].classList.remove("desabi");
        //  console.log('her', logica(count5, 'y1'), count5);
        dispatch(agevalor(logica(count5, "y1")));

        dispatch(educationvalor(EduLogica(valorE, "y1")));

        dispatch(setvd1(1));
        dispatch(setvd2(2));

        //dispatch(setsm("y2"))
        ctotal(!false);
      } else {
        //console.log('her2');
        dispatch(agevalor(logica(count5, "y2")));

        dispatch(educationvalor(EduLogica(valorE, "y2")));

        dispatch(setvd1(0));
        dispatch(setvd2(0));

        //dispatch(setsm("y2"))
        ctotal(!true);
      }

      //dispatch(educationvalor(EduLogica(valorE, 'y1')));
    }

    //cerrar

    dispatch(mview2());
  }

  useEffect(() => {
    setTimeout(() => {
      //console.log(!(ids===""))
      if (!(ids === "")) {
        document.getElementById(ids).classList.add("active");
      }
    }, 200);
    //eslint-disable-next-line
  }, []);

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
              Select your Marital Status
            </h5>
          </div>
          <div className="modal-body">
            <div className="d-grid gap-2">
              <button
                type="button"
                id="m1"
                onClick={(e) => activo(e.target, false)}
                className="button button-primary default normal"
              >
                Married
              </button>
              <button
                type="button"
                id="m2"
                onClick={(e) => activo(e.target, false)}
                className="button button-primary default normal"
              >
                Common-Law
              </button>
              <button
                type="button"
                id="m3"
                onClick={(e) => {
                  activo(e.target, true);
                }}
                className="button button-primary default normal"
              >
                Never Married/Single
              </button>
              <button
                type="button"
                id="m4"
                onClick={(e) => activo(e.target, true)}
                className="button button-primary default normal"
              >
                Annulled Marriege
              </button>
              <button
                type="button"
                id="m5"
                onClick={(e) => activo(e.target, true)}
                className="button button-primary default normal"
              >
                Divorced/Seperated
              </button>
              <button
                type="button"
                id="m6"
                onClick={(e) => activo(e.target, true)}
                className="button button-primary default normal"
              >
                Legally Seperated
              </button>
              <button
                type="button"
                id="m7"
                onClick={(e) => activo(e.target, true)}
                className="button button-primary default normal"
              >
                Widowed
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

export default Modal;
