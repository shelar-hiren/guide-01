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
} from "../../state/Sstate_idioma.js";
import { useState, useEffect } from "react";

function L1() {
  const dispatch = useDispatch();

  const Primary = useSelector((state) => state.Sidioma.primario);
  const Secundario = useSelector((state) => state.Sidioma.secundario);

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
        break;
      case "option2":
        setLayerbtn(a1);
        dispatch(setsecundario(""));
        break;
      case "option3":
        setLayerbtn(a2);
        dispatch(setsecundario(""));
        break;
      case "option4":
        setLayerbtn(a2);
        dispatch(setsecundario(""));
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
      <h2 className="mb-3">Select Spouse Language</h2>
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

      <div style={{ display: "none" }}>
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
