import React from "react";
import { useEffect } from "react";
import { infoStore } from "../states/InfoState";

const ResultsList = ({ results }) => {
  const infos = infoStore((state) => state.infos);
  const initInfo = infoStore((state) => state.initInfo);
  const switchVal = infoStore((state) => state.switchVal);

  const HandleInfoState = (index) => {
    switchVal(index);
  };

  useEffect(() => {
    initInfo(results.map((r) => "false"));
  }, []);
  return results.map((r, index) => {
    return (
      <div
        className="list p-1 dark mb-0"
        onClick={() => HandleInfoState(index)}
      >
        <div className="list__info fs-m">
          <div className="list__info__1">{r.title}</div>

          <a className="fs-s" href={r.url} target="_blank">
            {r.url}
          </a>
        </div>
        <div className="list__info--authors fs-s" info-state={infos[index]}>
          <div className="list__info__1 fs-s fw-semi-bold">{r.auteur[0]}</div>
          {r.auteur.slice(1, -1).map((a) => (
            <div className="list__info__1">{a}</div>
          ))}
        </div>
      </div>
    );
  });
};

export default ResultsList;
