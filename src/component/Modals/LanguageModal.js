import React, { useEffect, useState, useRef } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../state/score";

const LanguageModal = ({ close, submitModal }) => {
  const dispatch = useDispatch();
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
  const { language } = useSelector((state) => state.Score);

  const [selectedLanguage, setSelectedLanguage] = useState(
    language.selectedLanguage
  );
  const [listingValue, setListingValue] = useState(language.listingValue);
  const [readingValue, setReadingValue] = useState(language.readingValue);
  const [writingValue, setWritingValue] = useState(language.writingValue);
  const [speakingValue, setSpeakingValue] = useState(language.speakingValue);

  const [secSelectedLanguage, setSecSelectedLanguage] = useState(
    language.secSelectedLanguage
  );
  const [secListingValue, setSecListingValue] = useState(
    language.secListingValue
  );
  const [secReadingValue, setSecReadingValue] = useState(
    language.secReadingValue
  );
  const [secWritingValue, setSecWritingValue] = useState(
    language.secWritingValue
  );
  const [secSpeakingValue, setSecSpeakingValue] = useState(
    language.secSpeakingValue
  );

  const [type, setType] = useState(1);

  const handleChangeListing = (value) => {
    setListingValue(value);
  };
  const handleChangeReading = (value) => {
    setReadingValue(value);
  };
  const handleChangeWriting = (value) => {
    setWritingValue(value);
  };
  const handleChangeSpeaking = (value) => {
    setSpeakingValue(value);
  };

  const handleChangeSecListing = (value) => {
    setSecListingValue(value);
  };
  const handleChangeSecReading = (value) => {
    setSecReadingValue(value);
  };
  const handleChangeSecWriting = (value) => {
    setSecWritingValue(value);
  };
  const handleChangeSecSpeaking = (value) => {
    setSecSpeakingValue(value);
  };

  const changeLanguage = (val) => {
    if (type == 1) {
      setListingValue(0);
      setReadingValue(0);
      setWritingValue(0);
      setSpeakingValue(0);
      setSelectedLanguage(val);
    } else {
      setSecListingValue(0);
      setSecReadingValue(0);
      setSecSpeakingValue(0);
      setSecWritingValue(0);
      setSecSelectedLanguage(val);
    }
  };

  const save = () => {
    let score = 0;
    if (selectedLanguage == 1) {
      if (listingValue >= 6) {
        if (listingValue >= 8) {
          score = score + 6;
        } else if (listingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (readingValue >= 6) {
        if (readingValue >= 8) {
          score = score + 6;
        } else if (readingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (writingValue >= 6) {
        if (writingValue >= 8) {
          score = score + 6;
        } else if (writingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (speakingValue >= 6) {
        if (speakingValue >= 8) {
          score = score + 6;
        } else if (speakingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    } else if (selectedLanguage == 2) {
      if (listingValue >= 7) {
        if (listingValue >= 8) {
          score = score + 6;
        } else if (listingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (readingValue >= 7) {
        if (readingValue >= 8) {
          score = score + 6;
        } else if (readingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (writingValue >= 7) {
        if (writingValue >= 8) {
          score = score + 6;
        } else if (writingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (speakingValue >= 7) {
        if (speakingValue >= 8) {
          score = score + 6;
        } else if (speakingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    } else if (selectedLanguage == 3) {
      if (listingValue >= 250) {
        if (listingValue >= 300) {
          score = score + 6;
        } else if (listingValue >= 280) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (readingValue >= 210) {
        if (readingValue >= 250) {
          score = score + 6;
        } else if (readingValue >= 230) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (writingValue >= 310) {
        if (writingValue >= 370) {
          score = score + 6;
        } else if (writingValue >= 350) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (speakingValue >= 310) {
        if (speakingValue >= 370) {
          score = score + 6;
        } else if (speakingValue >= 350) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    } else if (selectedLanguage == 4) {
      if (listingValue >= 460) {
        if (listingValue >= 520) {
          score = score + 6;
        } else if (listingValue >= 500) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (readingValue >= 460) {
        if (readingValue >= 520) {
          score = score + 6;
        } else if (readingValue >= 500) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (writingValue >= 10) {
        if (writingValue >= 14) {
          score = score + 6;
        } else if (writingValue >= 12) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (speakingValue >= 10) {
        if (speakingValue >= 14) {
          score = score + 6;
        } else if (speakingValue >= 12) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    }

    if (secSelectedLanguage == 1) {
      if (secListingValue >= 6) {
        if (secListingValue >= 8) {
          score = score + 6;
        } else if (secListingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secReadingValue >= 6) {
        if (secReadingValue >= 8) {
          score = score + 6;
        } else if (secReadingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secWritingValue >= 6) {
        if (secWritingValue >= 8) {
          score = score + 6;
        } else if (secWritingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secSpeakingValue >= 6) {
        if (secSpeakingValue >= 8) {
          score = score + 6;
        } else if (secSpeakingValue >= 7.5) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    } else if (secSelectedLanguage == 2) {
      if (secListingValue >= 7) {
        if (secListingValue >= 8) {
          score = score + 6;
        } else if (secListingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secReadingValue >= 7) {
        if (secReadingValue >= 8) {
          score = score + 6;
        } else if (secReadingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secWritingValue >= 7) {
        if (secWritingValue >= 8) {
          score = score + 6;
        } else if (secWritingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secSpeakingValue >= 7) {
        if (secSpeakingValue >= 8) {
          score = score + 6;
        } else if (secSpeakingValue >= 7) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    } else if (secSelectedLanguage == 3) {
      if (secListingValue >= 250) {
        if (secListingValue >= 300) {
          score = score + 6;
        } else if (secListingValue >= 280) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secReadingValue >= 210) {
        if (secReadingValue >= 250) {
          score = score + 6;
        } else if (secReadingValue >= 230) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secWritingValue >= 310) {
        if (secWritingValue >= 370) {
          score = score + 6;
        } else if (secWritingValue >= 350) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secSpeakingValue >= 310) {
        if (secSpeakingValue >= 370) {
          score = score + 6;
        } else if (secSpeakingValue >= 350) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    } else if (secSelectedLanguage == 4) {
      if (secListingValue >= 460) {
        if (secListingValue >= 520) {
          score = score + 6;
        } else if (secListingValue >= 500) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secReadingValue >= 460) {
        if (secReadingValue >= 520) {
          score = score + 6;
        } else if (secReadingValue >= 500) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secWritingValue >= 10) {
        if (secWritingValue >= 14) {
          score = score + 6;
        } else if (secWritingValue >= 12) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
      if (secSpeakingValue >= 10) {
        if (secSpeakingValue >= 14) {
          score = score + 6;
        } else if (secSpeakingValue >= 12) {
          score = score + 5;
        } else {
          score = score + 4;
        }
      }
    }
    submitModal({ type: "language", data: score });
    dispatch(
      setLang({
        selectedLanguage: selectedLanguage,
        listingValue: listingValue,
        readingValue: readingValue,
        writingValue: writingValue,
        speakingValue: speakingValue,
        secSelectedLanguage: secSelectedLanguage,
        secReadingValue: secReadingValue,
        secListingValue: secListingValue,
        secSpeakingValue: secSpeakingValue,
        secWritingValue: secWritingValue,
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
              Choose {type == 1 ? "primary" : "secondary"} language
            </h5>
          </div>
          <div className="modal-body">
            {type == 1 ? (
              <>
                <div className="language-block">
                  <button
                    type="button"
                    className={`btn ${
                      selectedLanguage == 1
                        ? "btn-secondary"
                        : "btn-secondary-outline"
                    }`}
                    onClick={() => {
                      changeLanguage(1);
                    }}
                  >
                    IELTS
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      selectedLanguage == 2
                        ? "btn-secondary"
                        : "btn-secondary-outline"
                    }`}
                    onClick={() => {
                      changeLanguage(2);
                    }}
                  >
                    CELPIP
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      selectedLanguage == 3
                        ? "btn-secondary"
                        : "btn-secondary-outline"
                    }`}
                    onClick={() => {
                      changeLanguage(3);
                    }}
                  >
                    TEF
                  </button>
                  <button
                    type="button"
                    className={`btn  ${
                      selectedLanguage == 4
                        ? "btn-secondary"
                        : "btn-secondary-outline"
                    }`}
                    onClick={() => {
                      changeLanguage(4);
                    }}
                  >
                    TCF
                  </button>
                </div>
                {selectedLanguage != 0 && (
                  <>
                    <div>
                      <label className="score-heading">Add Score</label>
                      <div>Listing: {listingValue}</div>
                      <Slider
                        min={0}
                        max={
                          selectedLanguage == 1
                            ? 9
                            : selectedLanguage == 2
                            ? 12
                            : selectedLanguage == 3
                            ? 360
                            : 700
                        }
                        value={listingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeListing}
                        onChangeComplete={() => {}}
                        step={selectedLanguage == 1 ? 0.5 : 1}
                      />

                      <div>Reading: {readingValue}</div>
                      <Slider
                        min={0}
                        max={
                          selectedLanguage == 1
                            ? 9
                            : selectedLanguage == 2
                            ? 12
                            : selectedLanguage == 3
                            ? 300
                            : 700
                        }
                        value={readingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeReading}
                        onChangeComplete={() => {}}
                        step={selectedLanguage == 1 ? 0.5 : 1}
                      />
                      <div>Writing: {writingValue}</div>
                      <Slider
                        min={0}
                        max={
                          selectedLanguage == 1
                            ? 9
                            : selectedLanguage == 2
                            ? 12
                            : selectedLanguage == 3
                            ? 450
                            : 20
                        }
                        value={writingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeWriting}
                        onChangeComplete={() => {}}
                        step={selectedLanguage == 1 ? 0.5 : 1}
                      />
                      <div>Speaking: {speakingValue}</div>
                      <Slider
                        min={0}
                        max={
                          selectedLanguage == 1
                            ? 9
                            : selectedLanguage == 2
                            ? 12
                            : selectedLanguage == 3
                            ? 450
                            : 20
                        }
                        value={speakingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeSpeaking}
                        onChangeComplete={() => {}}
                        step={selectedLanguage == 1 ? 0.5 : 1}
                      />
                    </div>
                    <u style={{ color: "blue", float: "right" }}>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => setType(2)}
                      >
                        Choose secondary language
                      </div>
                    </u>
                  </>
                )}
              </>
            ) : (
              <>
                <div className="language-block">
                  {[3, 4].includes(selectedLanguage) && (
                    <>
                      {" "}
                      <button
                        type="button"
                        className={`btn ${
                          secSelectedLanguage == 1
                            ? "btn-secondary"
                            : "btn-secondary-outline"
                        }`}
                        onClick={() => {
                          changeLanguage(1);
                        }}
                      >
                        IELTS
                      </button>
                      <button
                        type="button"
                        className={`btn ${
                          secSelectedLanguage == 2
                            ? "btn-secondary"
                            : "btn-secondary-outline"
                        }`}
                        onClick={() => {
                          changeLanguage(2);
                        }}
                      >
                        CELPIP
                      </button>
                    </>
                  )}
                  {[1, 2].includes(selectedLanguage) && (
                    <>
                      {" "}
                      <button
                        type="button"
                        className={`btn ${
                          secSelectedLanguage == 3
                            ? "btn-secondary"
                            : "btn-secondary-outline"
                        }`}
                        onClick={() => {
                          changeLanguage(3);
                        }}
                      >
                        TEF
                      </button>
                      <button
                        type="button"
                        className={`btn  ${
                          secSelectedLanguage == 4
                            ? "btn-secondary"
                            : "btn-secondary-outline"
                        }`}
                        onClick={() => {
                          changeLanguage(4);
                        }}
                      >
                        TCF
                      </button>
                    </>
                  )}
                </div>
                {secSelectedLanguage != 0 && (
                  <>
                    <div>
                      <label className="score-heading">Add Score</label>
                      <div>Listing: {secListingValue}</div>
                      <Slider
                        min={0}
                        max={
                          secSelectedLanguage == 1
                            ? 9
                            : secSelectedLanguage == 2
                            ? 12
                            : secSelectedLanguage == 3
                            ? 360
                            : 700
                        }
                        value={secListingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeSecListing}
                        onChangeComplete={() => {}}
                        step={secSelectedLanguage == 1 ? 0.5 : 1}
                      />

                      <div>Reading: {secReadingValue}</div>
                      <Slider
                        min={0}
                        max={
                          secSelectedLanguage == 1
                            ? 9
                            : secSelectedLanguage == 2
                            ? 12
                            : secSelectedLanguage == 3
                            ? 300
                            : 700
                        }
                        value={secReadingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeSecReading}
                        onChangeComplete={() => {}}
                        step={secSelectedLanguage == 1 ? 0.5 : 1}
                      />
                      <div>Writing: {secWritingValue}</div>
                      <Slider
                        min={0}
                        max={
                          secSelectedLanguage == 1
                            ? 9
                            : secSelectedLanguage == 2
                            ? 12
                            : secSelectedLanguage == 3
                            ? 450
                            : 20
                        }
                        value={secWritingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeSecWriting}
                        onChangeComplete={() => {}}
                        step={secSelectedLanguage == 1 ? 0.5 : 1}
                      />
                      <div>Speaking: {secSpeakingValue}</div>
                      <Slider
                        min={0}
                        max={
                          secSelectedLanguage == 1
                            ? 9
                            : secSelectedLanguage == 2
                            ? 12
                            : secSelectedLanguage == 3
                            ? 450
                            : 20
                        }
                        value={secSpeakingValue}
                        onChangeStart={() => {}}
                        onChange={handleChangeSecSpeaking}
                        onChangeComplete={() => {}}
                        step={secSelectedLanguage == 1 ? 0.5 : 1}
                      />
                    </div>
                  </>
                )}
                <u style={{ color: "blue", float: "right" }}>
                  {" "}
                  <div style={{ cursor: "pointer" }} onClick={() => setType(1)}>
                    Choose primary language
                  </div>
                </u>
              </>
            )}
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
export default LanguageModal;
