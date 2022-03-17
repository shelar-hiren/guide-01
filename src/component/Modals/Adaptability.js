import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Switch from "react-switch";
import { setAdpType } from "../../state/score";

const Adaptability = ({ close, submitModal }) => {
  const ref = useRef();

  const dispatch = useDispatch();
  const { adpType } = useSelector((state) => state.Score);

  const [a1, setA1] = useState(adpType.a1);
  const [a2, setA2] = useState(adpType.a2);
  const [a3, setA3] = useState(adpType.a3);
  const [a4, setA4] = useState(adpType.a4);
  const [a5, setA5] = useState(adpType.a5);
  const [a6, setA6] = useState(adpType.a6);
  const [a7, setA7] = useState(adpType.a7);

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
  useOnClickOutside(ref, () => close());

  const save = () => {
    let score = 0;
    let arr = [a1, a2, a3, a4, a5, a6, a7];
    if (arr.filter((x) => x == true).length == 1) {
      score = 5;
    } else if (arr.filter((x) => x == true).length >= 2) {
      score = 10;
    } else {
      score = 0;
    }
    submitModal({ type: "adaptability", data: score });
    dispatch(
      setAdpType({
        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,
        a5: a5,
        a6: a6,
      })
    );
  };

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
              Select your valid option
            </h5>
          </div>
          <div className="modal-body">
            {" "}
            <div className="adp-block">
              <div>
                Your spouse of partner's language test is equal or greater than
                CLB4
              </div>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#5561e2"
                onChange={() => setA1(!a1)}
                checked={a1}
              />
            </div>
            <div className="adp-block">
              <div>Your past studies in canada at least 2 years full time</div>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#5561e2"
                onChange={() => setA2(!a2)}
                checked={a2}
              />
            </div>
            <div className="adp-block">
              <div>
                Your spouse or partner's past studies in canada at least 2 years
                full time
              </div>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#5561e2"
                onChange={() => setA3(!a3)}
                checked={a3}
              />
            </div>
            <div className="adp-block">
              <div>Your past work ex in canada of at least one year</div>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#5561e2"
                onChange={() => setA4(!a4)}
                checked={a4}
              />
            </div>
            <div className="adp-block">
              <div>
                Your spouse or partner's past work ex in canada of at least one
                year
              </div>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#5561e2"
                onChange={() => setA5(!a5)}
                checked={a5}
              />
            </div>
            <div className="adp-block">
              <div>Arranged employment in canada</div>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#5561e2"
                onChange={() => setA6(!a6)}
                checked={a6}
              />
            </div>
            <div className="adp-block">
              <div>Blood relatives in canada</div>
              <Switch
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#5561e2"
                onChange={() => setA7(!a7)}
                checked={a7}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={close}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={save}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Adaptability;
