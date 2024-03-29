import React, { useRef, useEffect } from "react";

const CheckEligibility = ({ close, score }) => {
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
  useOnClickOutside(ref, () => close());
  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", background: "#21004454", zIndex: 9999 }}
    >
      <div className="modal-dialog" ref={ref}>
        <div className="modal-content bg-p">
          <div className="modal-body text-center">
            {score < 67 ? (
              <>
                <div>Uh-Oh</div>
                <div>Your are not eligible for</div>
                <div>EXPRESS ENTRY</div>
                <div>Min points required to be eligible for EE is 67</div>
              </>
            ) : (
              <>
                <div>Congratulations</div>
                <div>Your are eligible for</div>
                <div>EXPRESS ENTRY</div>
              </>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-secondary"
              data-bs-dismiss="modal"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CheckEligibility;
