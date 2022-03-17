import { useState } from "react";
import { setVL1, setVR1, setVW1, setVS1 } from "../../state/Sstate_idioma.js";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

function Range(props) {
  const dispatch = useDispatch();
  const L = useSelector((state) => state.Sidioma.L1);
  const R = useSelector((state) => state.Sidioma.R1);
  const W = useSelector((state) => state.Sidioma.W1);
  const S = useSelector((state) => state.Sidioma.S1);

  const [listening, setListening] = useState(L);
  const [reading, setReading] = useState(R);
  const [writing, setWriting] = useState(W);
  const [speaking, setSpeaking] = useState(S);

  return (
    <>
      <p className="fw-bold">
        Listening: <span className="fw-normal">{listening}</span>{" "}
      </p>
      <Slider
        id="scustomRange1"
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

      <p className="fw-bold">
        Reading: <span className="fw-normal">{reading}</span>{" "}
      </p>
      <Slider
        id="scustomRange2"
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

      <p className="fw-bold">
        Writing: <span className="fw-normal">{writing}</span>{" "}
      </p>
      <Slider
        id="scustomRange3"
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

      <p className="fw-bold">
        Speaking: <span className="fw-normal">{speaking}</span>{" "}
      </p>
      <Slider
        id="scustomRange4"
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
