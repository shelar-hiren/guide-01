import Card from "../card.jsx";
import Modal from "../modal.jsx";
import Modal2 from "../modal2.jsx";
import Age from "../Age.jsx";

import Education from "../Education.jsx";
import Language from "../Language.jsx";
import Score from "../language/Score.jsx";
import Score2 from "../Slanguage/Score.jsx";
import Work from "../Work.jsx";
import Ceducation from "../Ceducation.jsx";
import Adicional from "../Adicional.jsx";
import Seducation from "../Seducation.jsx";
import Swork from "../Swork.jsx";
import SLanguage from "../SLanguage.jsx";
import Reset from "../Reset.jsx";
import Analysis from "../Analysis.jsx";
import Rec from "../Rec.jsx";
import { useSelector, useDispatch } from "react-redux";
import { mview1, setGD } from "../../state/modals";
import { useState, useEffect } from "react";
import {
  faCakeCandles,
  faGraduationCap,
  faLanguage,
  faBriefcase,
  faPlus,
  faPlaneDeparture,
  faUserGraduate,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WeddingRing from "../../assets/wedding-ring.svg";

function CrsCalculator() {
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

  const [mview, setMview] = useState("");
  const [con, setCon] = useState(1);
  const [conr, setConr] = useState(-1);
  const [con2, setCon2] = useState(false);

  const text = [
    "Marital Status",
    "Accompanying Spouse",
    "Age",
    "Education",
    "Language",
    "Work Experience",
    "Canadian Education",
    "Additional Points",
  ];

  const ico = [
    WeddingRing,
    faPlaneDeparture,
    faCakeCandles,
    faGraduationCap,
    faLanguage,
    faBriefcase,
    faGraduationCap,
    faPlus,
  ];

  const text2 = [
    "Spouse Education",
    "Spouse Language",
    "Spouse Work Experience",
  ];

  let ed = AgeValor;
  if (ed === undefined) {
    ed = 0;
  }

  const modales = [
    "modal",
    "modal2",
    "Age",
    "Education",
    "Language",
    "Work",
    "Ceducation",
    "Adicional",
  ];
  const valores = [
    0,
    0,
    ed,
    EducationValor,
    idiomaT1 + idiomaT2,
    worktotal,
    Ceducationtotal,
    Adi,
  ];
  let es = "";

  function condi(i, g, r) {
    if (i > g) {
      es = "desabi";
    } else {
      es = "";
    }
    if (i === r) {
      es = "desabi";
    }
  }

  const d2s = ["1", "2", "3"];
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
      switch (count) {
        case "modal":
          setMview(<Modal />);
          break;
        case "modal2":
          setMview(<Modal2 />);
          break;
        case "Age":
          setMview(<Age />);
          break;
        case "Education":
          setMview(<Education />);
          break;
        case "Language":
          setMview(<Language />);
          break;
        case "Work":
          setMview(<Work />);
          break;
        case "Ceducation":
          setMview(<Ceducation />);
          break;
        case "Adicional":
          setMview(<Adicional />);
          break;
        case "1":
          setMview(<Seducation />);
          break;
        case "3":
          setMview(<Swork />);
          break;
        case "2":
          setMview(<SLanguage />);
          break;
        case "Analysis":
          setMview(<Analysis />);
          break;
        case "Rec":
          setMview(<Rec />);
          break;
        default:
          setMview("");
      }
    }

    function mfirst() {
      switch (count2) {
        case "m1":
          setCon(10);
          setConr(-1);
          break;

        case "m2":
          setCon(10);
          setConr(-1);
          break;

        case "m3":
          setCon(10);
          setConr(1);
          break;
        case "m4":
          setCon(10);
          setConr(1);
          break;
        case "m5":
          setCon(10);
          setConr(1);
          break;
        case "m6":
          setCon(10);
          setConr(1);
          break;

        case "m7":
          setCon(10);
          setConr(1);
          break;

        default:
          setCon(1);
      }
    }

    function msecond() {
      switch (count3 + count2) {
        case "y1m1":
          setCon2(true);
          break;

        case "y1m2":
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

    if (sm + count3 === "y1y1") {
      dispatch(setGD(ts));
      return ts;
    } else {
      dispatch(setGD(t));
      return t;
    }
  }
  const text3 = [
    "Age",
    "Education",
    "Language",
    "Work Experience",
    "Canadian Education",
    "Additional Points",
    "Spouse Education",
    "Spouse Language",
    "Spouse Work Experience",
  ];

  const valores1 = [
    ed,
    EducationValor,
    idiomaT1 + idiomaT2,
    worktotal,
    Ceducationtotal,
    Adi,
    Seducationtotal,
    idiomaTS,
    Sworkv,
  ];

  const options = {
    chart: {
      height: 350,
      type: "radialBar",
    },
    legend: {
      show: true,
      floating: true,
      position: "bottom",
      fontSize: "12px",
      labels: {
        useSeriesColors: false,
        colors: "#fff",
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            color: "#fff",
            fontFamily: "Quicksand",
            formatter: function ({ config }) {
              const total = config.series.reduce(
                (partialSum, a) => partialSum + a,
                0
              );
              return total;
            },
          },
        },
      },
    },
    colors: [
      "#01A7A3",
      "#206A5D",
      "#EADCA6",
      "#C6B4CE",
      "#0092CA",
      "#779ca7",
      "#9be0df",
      "#4ff7d9",
      "#a2af57",
    ],
    labels: text3,
  };

  const series = valores1;

  return (
    <div className="container-fluid bg-p">
      <div>
        <div className="d-none">
          <Score />
          <Score2 />
        </div>
        {mview}{" "}
      </div>
      <div className="row justify-content-center">
        <div id="web-view" className="row p-0 web-view">
          <div className="col col-md-8 web-cal">
            <div className="web-header row">
              <div className="col-1">
                <span className="back-arrow">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </div>
              <div className="col">
                <h2>
                  {" "}
                  <b>CRS Calculator</b>
                </h2>
              </div>
              <div className="col text-end">
                <span className="cursor-pointer">
                  <Reset iswebView={true} />
                </span>
              </div>
            </div>
            <div>
              {text.map((i, index) => {
                condi(index, con, conr);
                return (
                  <div className="col-lg-12" key={i.length}>
                    <div
                      onClick={() => {
                        dispatch(mview1(modales[index]));
                      }}
                      className={`row justify-content-between align-items-center  p-3 mb-1 border border-white border-2 bg-p web-card ${es} `}
                    >
                      <div className="col-auto">
                        <div className="row align-items-center">
                          <button className="col-auto m-2 d-flex justify-content-center align-items-center button rounded-3 button-primary ">
                            {i === "Marital Status" ? (
                              <div>
                                <img
                                  className="image-contain"
                                  src={ico[index]}
                                />
                              </div>
                            ) : (
                              <FontAwesomeIcon
                                className="fs-6 m-0 fa-sm"
                                icon={ico[index]}
                              />
                            )}
                          </button>
                          <div className="col-auto px-0">
                            <p className="m-0 text-secondary card-text">{i}</p>
                          </div>
                        </div>
                      </div>
                      {index !== 0 && index !== 1 && (
                        <div className="col-auto p-0">
                          <p className="m-0 text-secondary fw-bold">
                            {valores[index]}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {con2 &&
              text2.map((i, index) => {
                return (
                  <div className="col-lg-12" key={i.length}>
                    <div
                      onClick={() => {
                        dispatch(mview1(d2s[index]));
                      }}
                      className={`row justify-content-between align-items-center  p-3 mb-1 border border-white border-2 bg-p web-card ${es}`}
                    >
                      <div className="col-auto">
                        <div className="row align-items-center">
                          <button className="col-auto m-2 d-flex justify-content-center align-items-center button button-primary ">
                            <FontAwesomeIcon
                              className="fs-6 m-0 fa-sm"
                              icon={ico2[index]}
                            />
                          </button>
                          <div className="col-auto px-0">
                            <p className="m-0 text-secondary card-text">{i}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-auto p-0">
                        <p className="m-0 text-secondary fw-bold">
                          {d2v[index]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div></div>
          </div>
          <div className="col col-md-4 background-primary web-score ">
            <h5>Your Score</h5>
            <h5> {grantotal()}</h5>
            <div className="mt-3">
              {text.map((i, index) => {
                if (index === 0 || index === 1) return null;
                return (
                  <div className="row" key={index}>
                    <div className="col-9 web-cal-text">{i}</div>
                    <div className="col">
                      <p>{valores[index]}</p>
                    </div>
                  </div>
                );
              })}
              {con2 && (
                <span>
                  {text2.map((i, index) => {
                    return (
                      <div className="row" key={index}>
                        <div className="col-9 web-cal-text">{i}</div>
                        <div className="col">
                          <p>{d2v[index]}</p>
                        </div>
                      </div>
                    );
                  })}
                </span>
              )}
            </div>
            <div id="chart" className="mt-4 d-flex justify-content-center">
              <Chart
                options={options}
                series={series}
                type="radialBar"
                width={380}
                height={350}
              />
            </div>
            <div className="d-grid">
              <button
                onClick={() => {
                  dispatch(mview1("Analysis"));
                }}
                type="button"
                className="button button-primary default normal icon-left mb-3 rounded m-1"
              >
                CRS Analysis
              </button>
              <button
                onClick={() => {
                  dispatch(mview1("Rec"));
                }}
                type="button"
                className="button button-primary default normal icon-left mb-1 rounded"
              >
                Score Recommendations
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-view col-md-6 col-sm-8 col-11">
          <div className="row mt-3 justify-content-center">
            <div className="col-12 ">
              <div className="row justify-content-center">
                <div className="col-12 sticky-header">
                  <div className="row justify-content-center">
                    <div className="col-12 justify-content-between align-items-center box-shadow p-3 mb-1 border border-white border-2 rounded-border">
                      <div className="row">
                        <div className="col p-0">
                          <h2 className="text-center text-secondary m-0 display-5 fs-5 f-bold">
                            Score
                            <div className="float-end trash-icon">
                              <span className="cursor-pointer">
                                <Reset iswebView={true} />
                              </span>
                            </div>
                          </h2>
                          <h1 className="text-center text-secondary m-0 display-2 total-score">
                            {grantotal()}
                          </h1>
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
                          type={i}
                          value={valores[index]}
                          styles={es}
                          ico={ico[index]}
                          onClick={() => {
                            dispatch(mview1(modales[index]));
                          }}
                          txt={i}
                        />
                      </div>
                    );
                  })}
                  {Spouse(con2)}
                </div>
                <div className="col-auto">
                  <button
                    onClick={() => {
                      dispatch(mview1("Analysis"));
                    }}
                    type="button"
                    className="button button-primary default normal icon-left mb-1 rounded"
                  >
                    CRS Analysis
                  </button>
                </div>
                <div className="col-auto">
                  <button
                    onClick={() => {
                      dispatch(mview1("Rec"));
                    }}
                    type="button"
                    className="button button-primary default normal icon-left mb-1 rounded"
                  >
                    Score Recommendations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrsCalculator;
