import { useState } from "react";
import "./TeamSelection.css";
import UsaMap from "./assets/usa-map.svg";
import { teams } from "./teams";

function TeamSelection() {
  const [team1, setTeam1] = useState<string | null>(null);
  const [team2, setTeam2] = useState<string | null>(null);

  return (
    <div className="team-select-wrapper">
      <h2 className="team-select-heading">Select a team</h2>
      <div id="map-wrapper">
        <img alt="Map of the United States" id="usa-map" src={UsaMap} />
        {teams.map((team) => (
          <div
            className="team-wrapper"
            style={{ left: `${team.coords.x}%`, top: `${team.coords.y}%` }}
          >
            <div
              role="button"
              className="team-marker"
              style={{
                backgroundColor:
                  team1 === team.id || team2 === team.id
                    ? `var(--${team.colours.bg})`
                    : "",
                borderColor:
                  team1 === team.id || team2 === team.id
                    ? `var(--${team.colours.accent})`
                    : `var(--${team.colours.identifier})`,
              }}
              onClick={() => {
                if (team1 === team.id) {
                  setTeam1(null);
                } else if (team2 === team.id) {
                  setTeam2(null);
                } else if (
                  team1 === null ||
                  (team1 === null) === (team2 === null)
                ) {
                  setTeam1(team.id);
                } else {
                  setTeam2(team.id);
                }
              }}
            >
              {team.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSelection;
