import { useSelector } from 'react-redux';
import { useState } from 'react';

function L2() {
  const count = useSelector((state) => state.modals.GD);
  const [score, setScore] = useState(count);

  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="1011"
        />
        <label htmlFor="floatingInput" className="fw-bold">
          Your NOC Code
        </label>
      </div>
      <div className="form-floating mb-3">
        <input
          onChange={(e) => {
            setScore(e.target.value);
          }}
          value={score}
          type="number"
          className="form-control"
          id="floatingInput2"
          placeholder="1011"
        />
        <label htmlFor="floatingInput2" className="fw-bold">
          Your CRS Score
        </label>
      </div>

      <div className="card card-body">
        <p>PNP's You Can Opt For</p>
        <div>
          <p>
            <span className="badge" style={{background:"#cff4fc"}}>
              <span className="visually-hidden">New alerts</span>
            </span>{' '}
            Elegible &nbsp;&nbsp;
            <span className="badge text-dark" style={{background:"#e2e3e5"}}>
              <span className="visually-hidden">New alerts</span>
            </span>{' '}
            Not Elegible &nbsp;&nbsp;
            <span className="badge text-dark" style={{background:"#d3d3d4"}}>
              <span className="visually-hidden">New alerts</span>
            </span>{' '}
            More info reqd
          </p>
        </div>
      </div>

      <ol className="list p-0 my-3">
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-secondary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">OINP - Ontario</div>
            <span className="small">Click to know more</span>{' '}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-secondary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">AINP - Alberta</div>
            <span className="small">Click to know more</span>{' '}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-secondary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">NSNP - Nova Scotia</div>
            <span className="small">Click to know more</span>{' '}
          </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-secondary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">SINP - Saskatchewan</div>
            <span className="small">Click to know more</span>{' '}
          </div>
          <span className="small text-danger">Check Eligibility</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-secondary">
          <div className="ms-2 me-auto">
            <div className="fw-bold">MPNP - Manitoba</div>
            <span className="small">Click to know more</span>{' '}
          </div>
          <span className="small text-danger">Check Eligibility</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-dark">
          <div className="ms-2 me-auto">
            <div className="fw-bold">PEI - Prince Esward</div>
            <span className="small">Click to know more</span>{' '}
          </div>
          <span className="small text-danger">Check Eligibility</span>
        </li>
      </ol>
    </>
  );
}

export default L2;
