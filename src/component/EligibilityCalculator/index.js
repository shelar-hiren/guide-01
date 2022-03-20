import Card from "../card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  faCakeCandles,
  faGraduationCap,
  faLanguage,
  faBriefcase,
  faUsers,
  faShuffle,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AgeModal from "../Modals/AgeModal";
import EducationModal from "../Modals/EducationModal";
import WorkExperiencesModal from "../Modals/WorkExperiencesModal";
import LanguageModal from "../Modals/LanguageModal";
import Adaptability from "../Modals/Adaptability";
import ArrangementModal from "../Modals/ArrangementModal";
import CheckEligibility from "../Modals/CheckEligibility";
import {
  setAdpType,
  setAgeValue,
  setArrange,
  setEduValue,
  setExpValue,
  setLang,
} from "../../state/score";
import "./eligibility-calculator.css";
import Chart from "react-apexcharts";

function EligibilityCalculator() {
  const [isOpenAgeModal, setIsOpenAgeModal] = useState(false);
  const [isOpenEducationModal, setIsOpenEducationModal] = useState(false);
  const [isOpenWorkExp, setIsOpenWorkExp] = useState(false);
  const [isOpenLanguageModal, setIsOpenLanguageModal] = useState(false);
  const [isOpenAdaptability, setIsOpenAdaptability] = useState(false);
  const [isOpenArrangement, setIsOpenArrangement] = useState(false);
  const [isOpenCheckEligibility, setIsOpenCheckEligibility] = useState(false);
  const [ageScore, setAgeScore] = useState(0);
  const [eduScore, setEduScore] = useState(0);
  const [expScore, setExpScore] = useState(0);
  const [langScore, setLangScore] = useState(0);
  const [adpScore, setAdpScore] = useState(0);
  const [arrangementScore, setArrangementScore] = useState(0);
  const totalScore =
    ageScore + eduScore + expScore + langScore + arrangementScore + adpScore;
  const dispatch = useDispatch();

  const text = [
    "Age",
    "Education",
    "Language",
    "Work Experience",
    "Arranged Employment",
    "Adaptability",
  ];

  const ico = [
    faCakeCandles,
    faGraduationCap,
    faLanguage,
    faBriefcase,
    faUsers,
    faShuffle,
  ];

  const valores = [
    ageScore,
    eduScore,
    langScore,
    expScore,
    arrangementScore,
    adpScore,
  ];

  const reset = () => {
    setAgeScore(0);
    setEduScore(0);
    setExpScore(0);
    setLangScore(0);
    setAdpScore(0);
    setArrangementScore(0);

    dispatch(setEduValue(0));
    dispatch(setAgeValue(null));
    dispatch(setExpValue(0));
    dispatch(setArrange(0));
    dispatch(
      setLang({
        selectedLanguage: 0,
        listingValue: 0,
        readingValue: 0,
        writingValue: 0,
        speakingValue: 0,
        secSelectedLanguage: 0,
        secReadingValue: 0,
        secListingValue: 0,
        secSpeakingValue: 0,
        secWritingValue: 0,
      })
    );
    dispatch(
      setAdpType({
        a1: 0,
        a2: 0,
        a3: 0,
        a4: 0,
        a5: 0,
        a6: 0,
      })
    );
  };

  const openModal = (name) => {
    if (name === "Age") {
      setIsOpenAgeModal(true);
    } else if (name === "Education") {
      setIsOpenEducationModal(true);
    } else if (name.replace(/ /g, "") === "WorkExperience") {
      setIsOpenWorkExp(true);
    } else if (name === "Language") {
      setIsOpenLanguageModal(true);
    } else if (name === "Adaptability") {
      setIsOpenAdaptability(true);
    } else if (name === "Arranged Employment") {
      setIsOpenArrangement(true);
    }
  };
  const submitModal = (obj) => {
    if (obj.type === "age") {
      setAgeScore(obj.data);
      setIsOpenAgeModal(false);
    } else if (obj.type === "education") {
      setEduScore(obj.data);
      setIsOpenEducationModal(false);
    } else if (obj.type === "workExp") {
      setExpScore(obj.data);
      setIsOpenWorkExp(false);
    } else if (obj.type === "language") {
      setLangScore(obj.data);
      setIsOpenLanguageModal(false);
    } else if (obj.type === "adaptability") {
      setAdpScore(obj.data);
      setIsOpenAdaptability(false);
    } else if (obj.type === "arrangement") {
      setArrangementScore(obj.data);
      setIsOpenArrangement(false);
    }
  };

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
    colors: ["#01A7A3", "#206A5D", "#EADCA6", "#C6B4CE", "#0092CA", "#50717B"],
    labels: text,
  };
  const series = valores;
  return (
    <>
      <div className="container-fluid bg-p">
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
                    <b>Eligibility Calculator</b>
                  </h2>
                </div>
                <div className="col text-end">
                  <span className="cursor-pointer" onClick={() => reset()}>
                    <FontAwesomeIcon icon={faTrash} color="#4F515B" />
                  </span>
                </div>
              </div>
              <div>
                {text.map((i, index) => {
                  return (
                    <div className="col-lg-12" key={i.length}>
                      <div
                        onClick={() => {
                          openModal(i);
                        }}
                        className={`row justify-content-between align-items-center  p-3 mb-1 border border-white border-2 bg-p web-card`}
                      >
                        <div className="col-auto">
                          <div className="row align-items-center">
                            <button
                              style={{ height: "40px", width: "43px" }}
                              className="col-auto m-2 d-flex justify-content-center align-items-center button button-primary rounded-3"
                            >
                              <FontAwesomeIcon
                                className="fs-6 m-0 fa-sm"
                                icon={ico[index]}
                              />
                            </button>
                            <div className="col-auto px-0">
                              <p className="m-0 text-secondary card-text">
                                {i}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto p-0">
                          <p className="m-0 text-secondary fw-bold">
                            {valores[index]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div></div>
            </div>
            <div className="col col-md-4 background-primary web-score ">
              <h5>Your Eligibility Score</h5>
              <h5>{totalScore}</h5>
              <div className="mt-3">
                {text.map((i, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-9 web-cal-text">{i}</div>
                      <div className="col">
                        <p>{valores[index]}</p>
                      </div>
                    </div>
                  );
                })}
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
              <button
                onClick={() => setIsOpenCheckEligibility(true)}
                type="button"
                className="button button-primary default normal icon-left mb-1 rounded"
              >
                Check Eligibility
              </button>
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
                            <h2 className="text-center text-secondary m-0 display-5 fs-5">
                              Your Eligibility Score
                              <div className="float-end trash-icon">
                                <span
                                  className="cursor-pointer"
                                  onClick={() => reset()}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    color="#4F515B"
                                  />
                                </span>
                              </div>
                            </h2>
                            <h1 className="text-center text-secondary m-0 display-2 total-score">
                              {totalScore}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    {text.map((i, index) => {
                      return (
                        <div className="col-lg-12 mt-3" key={i.length}>
                          <Card
                            value={valores[index]}
                            ico={ico[index]}
                            onClick={() => {
                              openModal(i);
                            }}
                            txt={i}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="col-auto">
                    <button
                      onClick={() => setIsOpenCheckEligibility(true)}
                      type="button"
                      className="button button-primary default normal icon-left mb-1 rounded"
                    >
                      Check Eligibility
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenCheckEligibility && (
        <CheckEligibility
          close={() => setIsOpenCheckEligibility(false)}
          score={totalScore}
        />
      )}
      {isOpenAgeModal && (
        <AgeModal
          close={() => setIsOpenAgeModal(false)}
          submitModal={submitModal}
        />
      )}
      {isOpenEducationModal && (
        <EducationModal
          close={() => setIsOpenEducationModal(false)}
          submitModal={submitModal}
        />
      )}
      {isOpenWorkExp && (
        <WorkExperiencesModal
          close={() => setIsOpenWorkExp(false)}
          submitModal={submitModal}
        />
      )}
      {isOpenLanguageModal && (
        <LanguageModal
          close={() => setIsOpenLanguageModal(false)}
          submitModal={submitModal}
        />
      )}
      {isOpenAdaptability && (
        <Adaptability
          close={() => setIsOpenAdaptability(false)}
          submitModal={submitModal}
        />
      )}
      {isOpenArrangement && (
        <ArrangementModal
          close={() => setIsOpenArrangement(false)}
          submitModal={submitModal}
        />
      )}
    </>
  );
}

export default EligibilityCalculator;
