import { valuesOrPlaceholder } from "./placeHolder";
import {BlockProfile,BlockContact, BlockWorkOrEducation, BlockLanguagesOrSkills } from "./cvBlocks";
import "./cv.css";

function CV(props) {

  const { personal, contact, education, work, skills, languages } =
    valuesOrPlaceholder(props.values);

  return (
    <div className="cv" id="cv" ref={props.screenshot}>
      <div className="information-area">
        <div className="header-card">
          <h2>{personal[0].first + " " + personal[0].last}</h2>
          <h3>{personal[0].job}</h3>
        </div>
        <div className="detailed-blocks">
          <BlockContact contact={contact} />
          <BlockLanguagesOrSkills skills={skills} category="skills" />
          <BlockLanguagesOrSkills languages={languages} category="languages"/>
        </div>
      </div>
      <div className="detailed-area">
        <div className="detailed-blocks">
          <BlockProfile description={personal[0].description} />
          <BlockWorkOrEducation education={education} category="education" />
          <BlockWorkOrEducation work={work} category="work" />
        </div>
      </div>
    </div>
  );
}

function DownloadableCV(props) {
  const { personal, contact, education, work, skills, languages } =
    valuesOrPlaceholder(props.values);

  return (
    <div className="downloadable cv" id="cv" ref={props.screenshot}>
      <div className="information-area">
        <div className="header-card">
          <h2>{personal[0].first + " " + personal[0].last}</h2>
          <h3>{personal[0].job}</h3>
        </div>
        <div className="detailed-blocks">
          <BlockContact contact={contact} />
          <BlockLanguagesOrSkills skills={skills} category="skills" />
          <BlockLanguagesOrSkills languages={languages} category="languages"/>
        </div>
      </div>
      <div className="detailed-area">
        <div className="detailed-blocks">
          <BlockProfile description={personal[0].description} />
          <BlockWorkOrEducation education={education} category="education" />
          <BlockWorkOrEducation work={work} category="work" />
        </div>
      </div>
    </div>
  );
}

export { CV,DownloadableCV };
