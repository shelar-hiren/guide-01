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

  return (
    <>
      <div className="container-fluid bg-p">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-8 col-11">
            <div className="row mt-3 justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="row justify-content-center">
                      <div className="col-12 justify-content-between align-items-center box-shadow p-3 mb-1 border border-white border-2 rounded-border">
                        <h2 className="text-center text-secondary m-0 display-5 fs-5">
                          Eligibility Score
                        </h2>
                        <h1 className="text-center text-secondary m-0 display-2">
                          {totalScore}
                        </h1>
                        <div className="row mt-3 d-flex justify-content-center">
                          <div className="col-auto">
                            <button
                              className="rounded button button-primary default normal icon-left"
                              onClick={() => reset()}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
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
