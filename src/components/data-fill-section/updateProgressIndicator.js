function boxValuesFull(boxCategory) {
  let emptyField = false;
  for (let object of boxCategory)
    for (let [key, value] of Object.entries(object)) {
      if (!value) {
        emptyField = true;
      }
    }
  return !emptyField;
}

function totalStageSteps(category) {
  let steps = 0;

  for (let object of category) {
    steps += Object.keys(object).length;
  }

  return steps;
}

function getPointDiameter() {
  const progressBarStyles = getComputedStyle(
    document.querySelector(".progressBar")
  );
  const stageDistance = Number(
    progressBarStyles.getPropertyValue("--static-point-diameter").split("p")[0]
  );
  return stageDistance;
}

function portionIncrease(category) {
  return (
    ((1 / 5) * (1 - 4 * getPortionOfOnePoint())) / totalStageSteps(category)
  );
}

function getPortionOfOnePoint() {
  const progressBarStyles = getComputedStyle(
    document.querySelector(".progressBar")
  );
  const pointDiameter = getPointDiameter();
  const barLength = Number(
    progressBarStyles.getPropertyValue("--bar-length").split("p")[0]
  );
  const startPointDiameter = Number(
    progressBarStyles.getPropertyValue("--start-point-diameter").split("p")[0]
  );
  return pointDiameter / (barLength - pointDiameter - startPointDiameter);
}

function getPortionOfReachedStagesAndPoints(reachedStages) {
  const pointPortion = getPortionOfOnePoint();
  const stagePortion = (1 / 5) * (1 - 4 * getPortionOfOnePoint());
  return reachedStages * (pointPortion + stagePortion);
}

function allBoxesFull(values) {
  const { personal, contact, education, work, skills, languages } = values;
  if(boxValuesFull(skills) && boxValuesFull(languages) && boxValuesFull(work) && boxValuesFull(education) && boxValuesFull(contact) && boxValuesFull(personal)) {
    return true;
  } else {
    return false;
  }
} 

function updateProgressIndicator(values) {
  const { personal, contact, education, work, skills, languages } = values;
  const progressBar = document.querySelector(".progressBar");
  let portion = 0;
  for (let field in personal[0]) {
    if (personal[0][field]) {
      portion += portionIncrease(personal);
    }
  }
  if (boxValuesFull(personal)) {
    portion = getPortionOfReachedStagesAndPoints(1);
  }

  for (let field in contact[0]) {
    if (contact[0][field]) {
      portion += portionIncrease(contact);
    }
  }
  if (boxValuesFull(contact) && boxValuesFull(personal)) {
    portion = getPortionOfReachedStagesAndPoints(2);
  }

  for (let object of education) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(education);
      }
    }
  }
  if (boxValuesFull(education) && boxValuesFull(contact) && boxValuesFull(personal)) {
    portion = getPortionOfReachedStagesAndPoints(3);
  }

  for (let object of work) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(work);
      }
    }
  }
  if (boxValuesFull(work) && boxValuesFull(education) && boxValuesFull(contact) && boxValuesFull(personal)) {
    portion = getPortionOfReachedStagesAndPoints(4);
  }

  for (let object of skills) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(skills) / 2;
      }
    }
  }

  for (let object of languages) {
    for (let field in object) {
      if (object[field]) {
        portion += portionIncrease(languages) / 2;
      }
    }
  }
  if (boxValuesFull(skills) && boxValuesFull(languages) && boxValuesFull(work) && boxValuesFull(education) && boxValuesFull(contact) && boxValuesFull(personal)) {
    portion = getPortionOfReachedStagesAndPoints(5);
  }

  progressBar.style.setProperty("--indicator-portion", portion);
}

export { updateProgressIndicator,boxValuesFull, allBoxesFull};
