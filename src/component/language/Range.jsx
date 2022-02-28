import { useState } from 'react';
import { setVL1, setVR1, setVW1, setVS1 } from '../../state/state_idioma.js';
import { useSelector, useDispatch } from 'react-redux';

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
        Listening: <span className="fw-normal text-secondary">{listening}</span>{' '}
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
      <p className="fw-bold text-secondary">
        Reading: <span className="fw-normal text-secondary">{reading}</span>{' '}
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
      <p className="fw-bold text-secondary">
        Writing: <span className="fw-normal text-secondary">{writing}</span>{' '}
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
      <p className="fw-bold text-secondary">
        Speaking: <span className="fw-normal text-secondary">{speaking}</span>{' '}
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
