import { useDispatch, useSelector } from "react-redux";
import {
  setnext,
  setprimario,
  setsecundario,
  setVL1,
  setVR1,
  setVW1,
  setVS1,
  setVL2,
  setVR2,
  setVW2,
  setVS2,
} from "../../state/state_idioma.js";
import { useState, useEffect } from "react";

function L1() {
  const dispatch = useDispatch();

  const Primary = useSelector((state) => state.idioma.primario);
  const Secundario = useSelector((state) => state.idioma.secundario);

  const a1 = (
    <>
      <label className="btn btn-secondary">
        <input
          style={{ display: "none" }}
          onClick={(e) => verificando2(e)}
          type="radio"
          name="options2"
          id="option6"
        />{" "}
        TEF
      </label>
      <label className="btn btn-secondary">
        <input
          style={{ display: "none" }}
          onClick={(e) => verificando2(e)}
          type="radio"
          name="options2"
          id="option7"
        />{" "}
        TCF
      </label>
    </>
  );

  const a2 = (
    <>
      <label className="btn btn-secondary">
        <input
          style={{ display: "none" }}
          onClick={(e) => verificando2(e)}
          type="radio"
          name="options2"
          id="option8"
        />{" "}
        IELTS
      </label>
      <label className="btn btn-secondary">
        <input
          style={{ display: "none" }}
          onClick={(e) => verificando2(e)}
          type="radio"
          name="options2"
          id="option9"
        />{" "}
        CELPIP
      </label>
    </>
  );

  const [layerbtn, setLayerbtn] = useState("");
  //const [element, setElement] = useState('');

  //const next = useSelector((state) => state.idioma.next);
  //
  function clear() {
    let b = document.querySelectorAll(".d-grid.gap-2")[1];
    //console.log(b.childNodes[2])
    if (!(b.childNodes[2] === undefined)) {
      let c = b.childNodes;
      c.forEach((i) => i.classList.remove("active"));
    }
  }

  function verificando(e) {
    // console.log(e.target.id);
    //
    //reset L1
    dispatch(setVL1(0));
    dispatch(setVR1(0));
    dispatch(setVW1(0));
    dispatch(setVS1(0));
    //reset L2
    dispatch(setVL2(0));
    dispatch(setVR2(0));
    dispatch(setVW2(0));
    dispatch(setVS2(0));

    dispatch(setprimario(e.target.id));

    for (let i = 0; i < 4; i++) {
      document
        .getElementById("option" + (i + 1))
        .parentNode.classList.remove("active");
    }

    e.target.parentNode.classList.add("active");
    dispatch(setnext(false));
    //console.log(e.target.id);
    switch (e.target.id) {
      case "option1":
        setLayerbtn(a1);
        dispatch(setsecundario(""));
        clear();
        break;
      case "option2":
        setLayerbtn(a1);
        dispatch(setsecundario(""));
        clear();
        break;
      case "option3":
        setLayerbtn(a2);
        dispatch(setsecundario(""));
        clear();
        break;
      case "option4":
        setLayerbtn(a2);
        dispatch(setsecundario(""));
        clear();
        break;
      default:
        setLayerbtn("");
    }
  }

  function verificando2(e) {
    dispatch(setVL2(0));
    dispatch(setVR2(0));
    dispatch(setVW2(0));
    dispatch(setVS2(0));

    // console.log(b.childNodes)
    clear();
    e.target.parentNode.classList.add("active");

    dispatch(setsecundario(e.target.id));
    // console.log(Secundario,e.target.id)
  }

  useEffect(() => {
    const b = document.getElementById(Primary);

    switch (Primary) {
      case "option1":
        setLayerbtn(a1);
        break;
      case "option2":
        setLayerbtn(a1);
        break;
      case "option3":
        setLayerbtn(a2);
        break;
      case "option4":
        setLayerbtn(a2);
        break;
      default:
        setLayerbtn("");
    }
    if (!(b === null)) {
      b.parentNode.classList.add("active");
    }

    setTimeout(() => {
      const c = document.getElementById(Secundario);
      //  console.log(c, Secundario);

      if (!(c === null)) {
        c.parentNode.classList.add("active");
      }
    }, 100);

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <h5 className="text-secondary mb-3">Select Primary Language</h5>
      <div className="d-grid gap-2">
        <label className="btn btn-secondary">
          <input
            style={{ display: "none" }}
            onClick={(e) => verificando(e)}
            type="radio"
            name="options"
            id="option1"
          />{" "}
          IELTS
        </label>
        <label className="btn btn-secondary">
          <input
            style={{ display: "none" }}
            onClick={(e) => verificando(e)}
            type="radio"
            name="options"
            id="option2"
          />{" "}
          CELPIP
        </label>
        <label className="btn btn-secondary">
          <input
            style={{ display: "none" }}
            onClick={(e) => verificando(e)}
            type="radio"
            name="options"
            id="option3"
          />{" "}
          TEF
        </label>
        <label className="btn btn-secondary">
          <input
            style={{ display: "none" }}
            onClick={(e) => verificando(e)}
            type="radio"
            name="options"
            id="option4"
          />{" "}
          TCF
        </label>
      </div>

      <h5 className="text-secondary mb-3 mt-4">Select Secondary Language</h5>

      <div className="d-grid gap-2">
        <label className="btn btn-secondary">
          <input
            style={{ display: "none" }}
            onClick={(e) => verificando2(e)}
            type="radio"
            name="options2"
            id="option5"
          />{" "}
          Not Applicable
        </label>
        {layerbtn}
      </div>
    </>
  );
}

export default L1;
