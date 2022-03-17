import { useState } from "react";
import { setVL1, setVR1, setVW1, setVS1 } from "../../state/state_idioma.js";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

function Range(props) {
  const dispatch = useDispatch();
  const L = useSelector((state) => state.idioma.L1);
  const R = useSelector((state) => state.idioma.R1);
  const W = useSelector((state) => state.idioma.W1);
  const S = useSelector((state) => state.idioma.S1);

  const [listening, setListening] = useState(L);
  const [reading, setReading] = useState(R);
  const [writing, setWriting] = useState(W);
  const [speaking, setSpeaking] = useState(S);

  return (
    <>
      <p className="fw-bold text-secondary">
        Listening: <span className="fw-normal text-secondary">{listening}</span>{" "}
      </p>
      <Slider
        id="customRange1"
        min={props.param.Lmin}
        max={props.param.Lmax}
        value={listening}
        onChangeStart={() => {}}
        onChange={(value) => {
          setListening(value);
          dispatch(setVL1(value));
        }}
        onChangeComplete={() => {}}
        step={props.param.step}
      />

      <p className="fw-bold text-secondary">
        Reading: <span className="fw-normal text-secondary">{reading}</span>{" "}
      </p>
      <Slider
        id="customRange2"
        min={props.param.Rmin}
        max={props.param.Rmax}
        value={reading}
        onChangeStart={() => {}}
        onChange={(value) => {
          setReading(value);
          dispatch(setVR1(value));
        }}
        onChangeComplete={() => {}}
        step={props.param.step}
      />

      <p className="fw-bold text-secondary">
        Writing: <span className="fw-normal text-secondary">{writing}</span>{" "}
      </p>

      <Slider
        id="customRange3"
        min={props.param.Wmin}
        max={props.param.Wmax}
        value={writing}
        onChangeStart={() => {}}
        onChange={(value) => {
          setWriting(value);
          dispatch(setVW1(value));
        }}
        onChangeComplete={() => {}}
        step={props.param.step}
      />
      <p className="fw-bold text-secondary">
        Speaking: <span className="fw-normal text-secondary">{speaking}</span>{" "}
      </p>

      <Slider
        id="customRange4"
        min={props.param.Smin}
        max={props.param.Smax}
        value={speaking}
        onChangeStart={() => {}}
        onChange={(value) => {
          setSpeaking(value);
          dispatch(setVS1(value));
        }}
        onChangeComplete={() => {}}
        step={props.param.step}
      />
    </>
  );
}

export default Range;
