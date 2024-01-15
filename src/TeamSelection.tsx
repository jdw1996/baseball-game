import "./TeamSelection.css";
import UsaMap from "./assets/usa-map.svg";
import { teams } from "./teams";

function TeamSelection() {
  return (
    <div id="map-wrapper">
      <img alt="Map of the United States" id="usa-map" src={UsaMap} />
      {teams.map((team) => (
        <div
          className="team-wrapper"
          style={{ left: `${team.coords.x}%`, top: `${team.coords.y}%` }}
        >
          <div
            className="team-marker"
            style={{
              borderColor: `var(--${team.colours.identifier})`,
            }}
          >
            {team.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamSelection;
