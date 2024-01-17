import { useState } from "react";
import "./TeamSelection.css";
import UsaMap from "./assets/usa-map.svg";
import { teamsMap } from "./teams";

const UnknownTeam = () => (
  <div
    className="team-marker-inline"
    style={{
      borderColor: "var(--grey)",
    }}
  >
    ❓
  </div>
);

function TeamSelection() {
  const [homeTeam, setHomeTeam] = useState<string | null>(null);
  const [awayTeam, setAwayTeam] = useState<string | null>(null);

  console.log(Object.entries(teamsMap));
  return (
    <div className="team-select-wrapper">
      <h2 className="team-select-heading">Select your teams</h2>
      <div className="team-select-summary">
        <span>Today's match-up:</span>
        {awayTeam ? (
          <span
            className="team-marker-inline"
            style={{
              backgroundColor: `var(--${teamsMap.get(awayTeam)?.colours.bg})`,
              borderColor: `var(--${teamsMap.get(awayTeam)?.colours.accent})`,
            }}
            onClick={() => {
              setAwayTeam(null);
            }}
            role="button"
          >
            {teamsMap.get(awayTeam)?.icon}
          </span>
        ) : (
          <UnknownTeam />
        )}
        <span>@</span>
        {homeTeam ? (
          <span
            className="team-marker-inline"
            style={{
              backgroundColor: `var(--${teamsMap.get(homeTeam)?.colours.bg})`,
              borderColor: `var(--${teamsMap.get(homeTeam)?.colours.accent})`,
            }}
            onClick={() => {
              setHomeTeam(null);
            }}
            role="button"
          >
            {teamsMap.get(homeTeam)?.icon}
          </span>
        ) : (
          <UnknownTeam />
        )}
        <button
          onClick={() => {
            const oldHomeTeam = homeTeam;
            setHomeTeam(awayTeam);
            setAwayTeam(oldHomeTeam);
          }}
        >
          Swap home and away
        </button>
        <button
          onClick={() => {
            alert("TODO: Not implemented!");
          }}
        >
          Play ball!
        </button>
      </div>
      <div id="map-wrapper">
        <img alt="Map of the United States" id="usa-map" src={UsaMap} />
        {Array.from(teamsMap.entries()).map(([id, team]) => {
          console.log({ id, team });
          const { colours, coords } = team;
          const isHomeTeam = homeTeam === id;
          const isAwayTeam = awayTeam === id;

          return (
            <div
              className="team-wrapper"
              style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
            >
              <div
                role="button"
                className="team-marker"
                style={{
                  backgroundColor:
                    isHomeTeam || isAwayTeam ? `var(--${colours.bg})` : "",
                  borderColor:
                    isHomeTeam || isAwayTeam
                      ? `var(--${colours.accent})`
                      : `var(--${colours.identifier})`,
                }}
                onClick={() => {
                  if (isHomeTeam) {
                    setHomeTeam(null);
                  } else if (isAwayTeam) {
                    setAwayTeam(null);
                  } else if (homeTeam === null) {
                    setHomeTeam(id);
                  } else if (awayTeam === null) {
                    setAwayTeam(id);
                  }
                }}
              >
                {team.icon}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamSelection;
