import Card from './component/card.jsx';
import Modal from './component/modal.jsx';
import Modal2 from './component/modal2.jsx';
import Age from './component/Age.jsx';

import Education from './component/Education.jsx';
import Language from './component/Language.jsx';
import Score from './component/language/Score.jsx';
import Score2 from './component/Slanguage/Score.jsx';
import Work from './component/Work.jsx';
import Ceducation from './component/Ceducation.jsx';
import Adicional from './component/Adicional.jsx';
import Seducation from './component/Seducation.jsx';
import Swork from './component/Swork.jsx';
import SLanguage from './component/SLanguage.jsx';
import Reset from './component/Reset.jsx';
import Analysis from './component/Analysis.jsx';
import Rec from './component/Rec.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { mview1, setGD } from './state/modals.js';
import { useState, useEffect } from 'react';
import {
  faRing,
  faCakeCandles,
  faGraduationCap,
  faLanguage,
  faBriefcase,
  faPlus,
  faPlaneDeparture,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const count = useSelector((state) => state.modals.value);
  const count2 = useSelector((state) => state.modals2.value);
  const count3 = useSelector((state) => state.modals.id2);
  const AgeValor = useSelector((state) => state.valor.age);
  const EducationValor = useSelector((state) => state.valor.education);
  const idiomaT1 = useSelector((state) => state.idioma.total1);
  const idiomaT2 = useSelector((state) => state.idioma.total2);
  const idiomaTS = useSelector((state) => state.Sidioma.total1);
  const worktotal = useSelector((state) => state.work.total);
  const Ceducationtotal = useSelector((state) => state.valor.Ceducation);
  const Seducationtotal = useSelector((state) => state.valor.Seducation);
  const Sworkv = useSelector((state) => state.valor.Sworkv);
  const sm = useSelector((state) => state.valor.sm);
  const Adi = useSelector((state) => state.ad.total);

  const dispatch = useDispatch();

  const [mview, setMview] = useState('');
  const [con, setCon] = useState(1);
  const [conr, setConr] = useState(-1);
  const [con2, setCon2] = useState(false);

  const text = [
    'Marital Status',
    'Accompanying Spouse',
    'Age',
    'Education',
    'Language',
    'Work Experience',
    'Canadian Education',
    'Additional Points',
  ];

  const ico = [
    faRing,
    faPlaneDeparture,
    faCakeCandles,
    faGraduationCap,
    faLanguage,
    faBriefcase,
    faGraduationCap,
    faPlus,
  ];

  const text2 = [
    'Spouse Education',
    'Spouse Language',
    'Spouse Work Experience',
  ];

  let ed = AgeValor;
  if (ed === undefined) {
    ed = 0;
  }

  const modales = [
    'modal',
    'modal2',
    'Age',
    'Education',
    'Language',
    'Work',
    'Ceducation',
    'Adicional',
  ];
  const valores = [
    '',
    '',
    ed,
    EducationValor,
    idiomaT1 + idiomaT2,
    worktotal,
    Ceducationtotal,
    Adi,
  ];
  let es = '';

  function condi(i, g, r) {
    if (i > g) {
      es = 'desabi';
    } else {
      es = '';
    }
    if (i === r) {
      es = 'desabi';
    }
  }

  const d2s = ['1', '2', '3'];
  const d2v = [Seducationtotal, idiomaTS, Sworkv];
  const ico2 = [faUserGraduate, faLanguage, faBriefcase];

  function Spouse(e) {
    if (e) {
      return (
        <>
          {text2.map((i, index) => {
            return (
              <div key={index} className="col-lg-12 mt-3">
                <Card
                  ico={ico2[index]}
                  onClick={() => {
                    dispatch(mview1(d2s[index]));
                  }}
                  value={d2v[index]}
                  txt={i}
                />
              </div>
            );
          })}
        </>
      );
    } else {
      return <div></div>;
    }
  }

  useEffect(() => {
    function mstate() {
      console.log({count})
      switch (count) {
        case 'modal':
          setMview(<Modal />);
          break;
        case 'modal2':
          setMview(<Modal2 />);
          break;
        case 'Age':
          setMview(<Age />);
          break;
        case 'Education':
          setMview(<Education />);
          break;
        case 'Language':
          setMview(<Language />);
          break;
        case 'Work':
          setMview(<Work />);
          break;
        case 'Ceducation':
          setMview(<Ceducation />);
          break;   
        case 'Adicional':
          setMview(<Adicional />);
          break;
        case '1':
          setMview(<Seducation />);
          break;
        case '3':
          setMview(<Swork />);
          break;
        case '2':
          setMview(<SLanguage />);
          break;
        case 'Analysis':
          setMview(<Analysis />);
          break;
        case 'Rec':
          setMview(<Rec />);
          break;
        default:
          setMview('');
      }
    }

    function mfirst() {
      switch (count2) {
        case 'm1':
          setCon(10);
          setConr(-1);
          break;

        case 'm2':
          setCon(10);
          setConr(-1);
          break;

        case 'm3':
          setCon(10);
          setConr(1);
          break;
        case 'm4':
          setCon(10);
          setConr(1);
          break;
        case 'm5':
          setCon(10);
          setConr(1);
          break;
        case 'm6':
          setCon(10);
          setConr(1);
          break;

        case 'm7':
          setCon(10);
          setConr(1);
          break;

        default:
          setCon(1);
      }
    }

    function msecond() {
      switch (count3 + count2) {
        case 'y1m1':
          setCon2(true);
          break;

        case 'y1m2':
          setCon2(true);
          break;
        default:
          setCon2(false);
      }
    }

    mfirst();

    mstate();

    msecond();

    grantotal();
    //eslint-disable-next-line
  }, [count, count2, count3, grantotal()]);

  function grantotal() {
    // console.log(sm + count3);

    const t =
      ed +
      EducationValor +
      idiomaT1 +
      idiomaT2 +
      worktotal +
      Ceducationtotal +
      Adi;

    const ts =
      ed +
      EducationValor +
      idiomaT1 +
      idiomaT2 +
      worktotal +
      Ceducationtotal +
      Adi +
      Seducationtotal +
      Sworkv +
      idiomaTS;

    if (sm + count3 === 'y1y1') {
      dispatch(setGD(ts));
      return ts;
    } else {
      dispatch(setGD(t));
      return t;
    }
  }

  return (
    <div className="container-fluid bg-p">
      <div>
        <div className="d-none">
          <Score />
          <Score2 />
        </div>
        {mview}{' '}
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-8 col-11">
          <div className="row mt-3 justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-12 justify-content-between align-items-center shadow p-3 mb-1 border border-white border-2 rounded">
                      <h2 className="text-center text-secondary m-0 display-5 fs-5">
                        Score
                      </h2>
                      <h1 className="text-center text-secondary m-0 display-2">
                        {grantotal()}
                      </h1>
                      <div className="row mt-3">
                        <div className="col-auto">
                          <Reset />
                        </div>
                        <div className="col-auto">
                          <button
                            onClick={() => {
                              dispatch(mview1('Analysis'));
                            }}
                            type="button"
                            className="button button-primary default normal icon-left mb-1"
                          >
                            CRS Analysis
                          </button>
                        </div>
                        <div className="col-auto">
                          <button
                            onClick={() => {
                              dispatch(mview1('Rec'));
                            }}
                            type="button"
                            className="button button-primary default normal icon-left mb-1"
                          >
                            Score Recommendations
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  {text.map((i, index) => {
                    condi(index, con, conr);
                    return (
                      <div className="col-lg-12 mt-3" key={i.length}>
                        <Card
                          value={valores[index]}
                          styles={es}
                          ico={ico[index]}
                          onClick={() => {
                            dispatch(mview1(modales[index]));
                            console.log({ modales,  index, modalessss:  modales[index] })

                            // console.log(index);
                          }}
                          txt={i}
                        />
                      </div>
                    );
                  })}
                  {Spouse(con2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
