import { useState } from 'react';
import { setVL2, setVR2, setVW2, setVS2 } from '../../state/state_idioma.js';
import { useSelector, useDispatch } from 'react-redux';

function Rangetwo(props) {
  const dispatch = useDispatch();
  const L = useSelector((state) => state.idioma.L2);
  const R = useSelector((state) => state.idioma.R2);
  const W = useSelector((state) => state.idioma.W2);
  const S = useSelector((state) => state.idioma.S2);

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
          dispatch(setVL2(e.target.value));
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
          dispatch(setVR2(e.target.value));
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
          dispatch(setVW2(e.target.value));
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
          dispatch(setVS2(e.target.value));
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

export default Rangetwo;
