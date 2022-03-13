import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { mview2, saveid2 } from "../state/modals.js";
import { agevalor, educationvalor } from "../state/valores.js";
import { logica, EduLogica, logicawork, logicawork2 } from "./funciones.js";
import { setvd1, setvd2 } from "../state/state_idioma.js";
import { settotal } from "../state/work.js";

function Modal2() {
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.modals.id2);

  const count5 = useSelector((state) => state.valor.ageL);
  const valorE = useSelector((state) => state.valor.education);

  const canadian = useSelector((state) => state.work.n1);
  const foreign = useSelector((state) => state.work.n2);

  function ctotal() {
    if (ids === "y1") {
      const a = logicawork2(canadian, foreign);
      dispatch(settotal(a));
      //console.log(a);
    } else {
      const a = logicawork(canadian, foreign);
      dispatch(settotal(a));
      //console.log(a);
    }
  }

  useEffect(() => {
    ctotal();
    //eslint-disable-next-line
  }, [ids]);

  function activo(e) {
    // console.log(e.id);
    dispatch(saveid2(e.id));
    //  dispatch(opciones(e.id))
    //console.log(ids);
    /*for (let i = 0; i < 2; i++) {
      //console.log('y' + (i + 1));
      document.getElementById('y' + (i + 1)).classList.remove('active');
    }

    e.classList.add('active');*/

    dispatch(mview2());
    ctotal();
  }

  //  const [h, setH] = useState(valorE);

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
      <div className="modal-dialog">
        <div className="modal-content bg-p">
          <div className="modal-header">
            <h5 className="modal-title text-secondary">
              Is your spouse accompanying you?
            </h5>
          </div>
          <div className="modal-body">
            <div className="d-grid gap-2">
              <button
                onClick={(e) => {
                  activo(e.target);
                  dispatch(agevalor(logica(count5, "y1")));
                  dispatch(educationvalor(EduLogica(valorE, "y1")));
                  dispatch(setvd1(1));
                  dispatch(setvd2(2));
                }}
                id="y1"
                type="button"
                className="button button-primary default normal"
              >
                Yes
              </button>
              <button
                id="y2"
                onClick={(e) => {
                  //  console.log(valorE)
                  activo(e.target);
                  dispatch(agevalor(logica(count5, "y2")));
                  dispatch(educationvalor(EduLogica(valorE, "y2")));
                  dispatch(setvd1(0));
                  dispatch(setvd2(0));
                }}
                type="button"
                className="button button-primary default normal"
              >
                No
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

export default Modal2;
