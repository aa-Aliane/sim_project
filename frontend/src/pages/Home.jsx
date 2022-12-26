import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faSearch,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import ResultsList from "../components/ResultsList";
import { api } from "../api";

const noFile = {
  name: "null",
  size: 0,
  content: "null",
};

const Home = () => {
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [loadedFile, setLoadedFile] = useState(noFile);
  const [closedState, setClosedState] = useState(false);
  const [textTyped, setTextTyped] = useState("");
  const [results, setResults] = useState(null);

  const HandleTextTyped = (e) => {
    setTextTyped(e.target.value);
  };

  const HandleListRendering = () => {
    api.post("get_context/", { query_text: textTyped }).then((res) => {
      console.table("🚀 ~ file: Home.jsx:26 ~ api.post ~ res", res.data);
      setResults(
        res.data.map((article) => {
          return {
            title: article.title,
            url: article.url,
            auteur: article.authors,
          };
        })
      );
    });
  };

  return (
    <main className="main__container">
      <div className="file" data-state={pdfLoaded}>
        {!pdfLoaded && (
          <div
            className="file__text"
            onClick={() => {
              setClosedState(true);
              setTimeout(() => {
                setTextTyped("");
              }, 200);
            }}
          >
            <textarea
              className="textarea fs-m fw-regular"
              rows="10"
              onChange={HandleTextTyped}
              value={textTyped}
            ></textarea>
            <span
              className="file__text__clear"
              display-state={!textTyped ? "false" : "true"}
            ></span>
          </div>
        )}
        {pdfLoaded && (
          <>
            <div
              className="file__loaded"
              data-closed={closedState}
              onClick={() => {
                setClosedState(true);
                setTimeout(() => {
                  setPdfLoaded(false);
                  setLoadedFile(notFile);
                }, 200);
              }}
            >
              <p className="file__loaded__name">{loadedFile.name}</p>

              <span className="file__loaded__close"></span>
            </div>
          </>
        )}
      </div>
      <div className="btn--group mb-3">
        <button className="btn btn__upload">
          <input
            type="file"
            id="pdf"
            onInput={(e) => {
              setLoadedFile({
                name: e.target.files[0].name,
                size: e.target.files[0].size,
                content: "e.target.files[0].name",
              });
            }}
            hidden
          />
          <label htmlFor="pdf" onClick={() => setPdfLoaded(true)}>
            <div className="simple simple__wide">
              upload PDF
              <FontAwesomeIcon
                className="fs-xxl text-primary-500"
                icon={faFilePdf}
              />
            </div>
          </label>
        </button>
        <button className="btn btn__submit" onClick={HandleListRendering}>
          <div className="simple simple__tight">
            check
            <FontAwesomeIcon className="fs-l switch" icon={faSearch} />
          </div>
        </button>
      </div>
      {results && <ResultsList results={results} />}
    </main>
  );
};

export default Home;
