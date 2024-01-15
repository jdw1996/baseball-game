import { useState } from "react";
import "./TeamSelection.css";
import UsaMap from "./assets/usa-map.svg";
import { teams } from "./teams";

function TeamSelection() {
  const [homeTeam, setHomeTeam] = useState<string | null>(null);
  const [awayTeam, setAwayTeam] = useState<string | null>(null);

  return (
    <div className="team-select-wrapper">
      <h2 className="team-select-heading">Select a team</h2>
      <div id="map-wrapper">
        <img alt="Map of the United States" id="usa-map" src={UsaMap} />
        {teams.map((team) => {
          const { accent, bg, identifier } = team.colours;
          const isHomeTeam = homeTeam === team.id;
          const isAwayTeam = awayTeam === team.id;

          return (
            <div
              className="team-wrapper"
              style={{ left: `${team.coords.x}%`, top: `${team.coords.y}%` }}
            >
              <div
                role="button"
                className="team-marker"
                style={{
                  backgroundColor:
                    isHomeTeam || isAwayTeam ? `var(--${bg})` : "",
                  borderColor:
                    isHomeTeam || isAwayTeam
                      ? `var(--${accent})`
                      : `var(--${identifier})`,
                }}
                onClick={() => {
                  if (isHomeTeam) {
                    setHomeTeam(null);
                  } else if (isAwayTeam) {
                    setAwayTeam(null);
                  } else if (homeTeam === null) {
                    setHomeTeam(team.id);
                  } else if (awayTeam === null) {
                    setAwayTeam(team.id);
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
