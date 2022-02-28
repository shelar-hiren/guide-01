import { mview2 } from '../state/modals.js';
import { useDispatch, useSelector } from 'react-redux';
import { logicawork, logicawork2, logicawe, logicawf } from './funciones.js';
//import {useState} from "react"

function Analysis() {
  const dispatch = useDispatch();

  let AgeValor = useSelector((state) => state.valor.age);
  //console.log(AgeValor)
  if (AgeValor === undefined) {
    AgeValor = 0;
  }

  const count3 = useSelector((state) => state.modals.id2);
  const sm = useSelector((state) => state.valor.sm);
  const EducationValor = useSelector((state) => state.valor.education);
  const idiomaT1 = useSelector((state) => state.idioma.total1);
  const idiomaT2 = useSelector((state) => state.idioma.total2);
  const worktotal = useSelector((state) => state.work.n1);
  const worktotalf = useSelector((state) => state.work.n2);
  let work = 0;
  if (count3 + sm === 'y1y1') {
    work = logicawork2(worktotal, 0);
  } else {
    work = logicawork(worktotal, 0);
  }
  // console.log(parseInt(worktotal), EducationValor)
  const worke = logicawe(EducationValor, parseInt(worktotal));
  const workf = logicawf(worktotal, worktotalf);

  //let educationT = 0;

  const Seducationtotal = useSelector((state) => state.valor.Seducation);
  const Sworkv = useSelector((state) => state.valor.Sworkv);
  const idiomaTS = useSelector((state) => state.Sidioma.total1);
  const Ceducationtotal = useSelector((state) => state.valor.Ceducation);

  const sp = useSelector((state) => state.ad.s1);
  const sp2 = useSelector((state) => state.ad.s2);
  const sp3 = useSelector((state) => state.ad.s3);
  let LMI = 0;
  let Sibling = 0;
  let Provincial = 0;

  if (sp3) {
    Provincial = 600;
  }

  if (sp2) {
    Sibling = 15;
  }

  if (sp === 'aaa1') {
    LMI = 200;
  }

  if (sp === 'aaa2') {
    LMI = 50;
  }

  let Additional = 0;

  if (sp3) {
    Additional = 600;
  } else {
    Additional = LMI + Sibling + Provincial;
  }

  //totales
  const core_human = AgeValor + EducationValor + idiomaT1 + idiomaT2 + work;
  const Spouse_factor = Seducationtotal + Sworkv + idiomaTS;
  const skill = worke + workf;

  let o = '';

  let TOTAL = 0;
  if (count3 + sm === 'y1y1') {
    TOTAL = Additional + core_human + skill + Spouse_factor;
    o = '';
  } else {
    TOTAL = Additional + core_human + skill;
    o = 'd-none';
  }

  return (
    <div
      className="modal"
      style={{ display: 'block', background: '#21004454', zIndex: 5 }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-p text-secondary">
          <div className="modal-header">
            <h5 className="modal-title">CRS Analysis</h5>
          </div>
          <div className="modal-body">
            <h6>
              <b>TOTAL:</b> {TOTAL}/1200
            </h6>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="txt-p">Core/Human Factors</span>
                  </th>
                  <th scope="col" className="txt-p">{core_human}/500</th>
                </tr>
              </thead>
              <tbody className="text-secondary">
                <tr>
                  <th scope="row">Age</th>
                  <td>{AgeValor}</td>
                </tr>
                <tr>
                  <th scope="row">Level of Education</th>
                  <td>{EducationValor}</td>
                </tr>
                <tr>
                  <th scope="row">Official Languages</th>
                  <td colSpan="2">{idiomaT1 + idiomaT2}</td>
                </tr>
                <tr>
                  <th scope="row">Canadian Work Experience</th>
                  <td colSpan="2">{work}</td>
                </tr>
              </tbody>
            </table>
            <table className={`table ${o}`}>
              <thead>
                <tr>
                  <th scope="col">Spouse Factors</th>
                  <th scope="col">{Spouse_factor}/40</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Education</th>
                  <td>{Seducationtotal}</td>
                </tr>
                <tr>
                  <th scope="row">Canadian Work Experience</th>
                  <td>{Sworkv}</td>
                </tr>
                <tr>
                  <th scope="row">Language</th>
                  <td colSpan="2">{idiomaTS}</td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="txt-p">Skill Transferability Factors</th>
                  <th scope="col" className="txt-p">{skill}/100</th>
                </tr>
              </thead>
              <tbody className="text-secondary">
                <tr>
                  <th scope="row">Education</th>
                  <td>{worke}</td>
                </tr>
                <tr>
                  <th scope="row">Foreign Work Experience</th>
                  <td>{workf}</td>
                </tr>
                <tr>
                  <th scope="row">Certificate of Qualification</th>
                  <td colSpan="2">0</td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="txt-p">Additional Poits</th>
                  <th scope="col" className="txt-p" >{Additional}/600</th>
                </tr>
              </thead>
              <tbody className="text-secondary">
                <tr>
                  <th scope="row">Provincial Nomination</th>
                  <td>{Provincial}</td>
                </tr>
                <tr>
                  <th scope="row">LMIA job Offer</th>
                  <td colSpan="2">{LMI}</td>
                </tr>
                <tr>
                  <th scope="row">Sibling in Canada</th>
                  <td colSpan="2">{Sibling}</td>
                </tr>
                <tr>
                  <th scope="row">Study in Canada</th>
                  <td colSpan="2">{Ceducationtotal}</td>
                </tr>
                <tr>
                  <th scope="row">French Languages Skills</th>
                  <td colSpan="2">0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {
                dispatch(mview2());
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
