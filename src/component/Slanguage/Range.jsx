import { useState } from 'react';
import { setVL1, setVR1, setVW1, setVS1 } from '../../state/Sstate_idioma.js';
import { useSelector, useDispatch } from 'react-redux';

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
        Listening: <span className="fw-normal">{listening}</span>{' '}
      </p>
      <input
        onChange={(e) => {
          setListening(e.target.value);
          dispatch(setVL1(e.target.value));
        }}
        type="range"
        value={listening}
        className="form-range"
        min={props.param.Lmin}
        max={props.param.Lmax}
        step={props.param.step}
        id="customRange1"
      />
      <p className="fw-bold">
        Reading: <span className="fw-normal">{reading}</span>{' '}
      </p>

      <input
        onChange={(e) => {
          setReading(e.target.value);
          dispatch(setVR1(e.target.value));
        }}
        value={reading}
        type="range"
        className="form-range"
        min={props.param.Rmin}
        max={props.param.Rmax}
        step={props.param.step}
        id="customRange2"
      />
      <p className="fw-bold">
        Writing: <span className="fw-normal">{writing}</span>{' '}
      </p>

      <input
        onChange={(e) => {
          setWriting(e.target.value);
          dispatch(setVW1(e.target.value));
        }}
        value={writing}
        type="range"
        className="form-range"
        min={props.param.Wmin}
        max={props.param.Wmax}
        step={props.param.step}
        id="customRange3"
      />
      <p className="fw-bold">
        Speaking: <span className="fw-normal">{speaking}</span>{' '}
      </p>

      <input
        onChange={(e) => {
          setSpeaking(e.target.value);
          dispatch(setVS1(e.target.value));
        }}
        value={speaking}
        type="range"
        className="form-range"
        min={props.param.Smin}
        max={props.param.Smax}
        step={props.param.step}
        id="customRange4"
      />
    </>
  );
}

export default Range;
