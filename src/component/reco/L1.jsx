import { useSelector } from 'react-redux';

function L1() {
  const count = useSelector((state) => state.modals.GD);

  const count3 = useSelector((state) => state.modals.id2);
  const sm = useSelector((state) => state.valor.sm);

  let clases = 'd-none';
  let v1 = '+ 174';
  let v2 = '+ 186';

  if (count3 + sm === 'y1y1') {
    clases = '';
    v1 = '+ 166';
    v2 = '+ 178';
  }

  return (
    <div>
      <p className="text-center m-0">Your CRS Score</p>
      <h1 className="text-center mt-0">{count}</h1>
      <h5 className="text-center txt-p">Recommended Improvements</h5>
      <ol className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold text-secondary">Primary Language(CLB 9)</div>
          </div>
          <span className="txt-p">{v1}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold text-secondary">Primary Language(CLB 10)</div>
          </div>
          <span className="txt-p">{v2}</span>
        </li>
        <li className="list-group-item">
          <div className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold text-secondary">Secondary Language(CLB 7)</div>
            </div>
            <span className="txt-p">+ 62</span>
          </div>
          <div className="d-flex justify-content-between align-items-start ps-2 my-2">
            <div className="ms-2 me-auto">
              <div className="fw-bold small text-secondary">
                French <span className="txt-p">NCLC 7</span> or above
              </div>
              <div className="fw-bold small text-secondary">
                English <span className="txt-p">CLB 4</span> or below
              </div>
            </div>
            <span className="txt-p">+ 37</span>
          </div>
          <div className="d-flex justify-content-between align-items-start ps-2 my-2">
            <div className="ms-2 me-auto">
              <div className="fw-bold small text-secondary">
                French <span className="txt-p">NCLC 7</span> or above
              </div>
              <div className="fw-bold small text-secondary">
                English <span className="txt-p">CLB 5</span> or below
              </div>
            </div>
            <span className="txt-p">+ 62</span>
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold text-secondary">Work Ex (3+ years)</div>
          </div>
          <span className="txt-p">+ 13</span>
        </li>
        <li
          className={`list-group-item d-flex justify-content-between align-items-start ${clases}`}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold text-secondary">Spouse Education</div>
          </div>
          <span className="txt-p">+ 2</span>
        </li>
        <li
          className={`list-group-item d-flex justify-content-between align-items-start ${clases}`}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold text-secondary">Spouse Language</div>
          </div>
          <span className="txt-p">+ 20</span>
        </li>
      </ol>
    </div>
  );
}

export default L1;
