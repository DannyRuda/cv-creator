function valuesOrPlaceholder(values) {
  const { personal, contact } = values;

  let educationCopy = values.education.slice();
  let workCopy = values.work.slice();
  let skillsCopy = values.skills.slice();
  let languagesCopy = values.languages.slice();

  educationCopy = educationCopy.map((education) => {
    return {
      graduation: education.graduation
        ? education.graduation
        : "Graduation/Degree",
      institution: education.institution
        ? education.institution
        : "Institution/School",
      start: education.start ? education.start : "Start mm/yyyy",
      end: education.end ? education.end : "End mm/yyyy",
      description: education.description
        ? education.description
        : "Top of the Year with a Score of 1.0.",
    };
  });

  workCopy = workCopy.map((work) => {
    return {
      position: work.position ? work.position : "Job Position",
      company: work.company ? work.company : "Company",
      start: work.start ? work.start : "Start mm/yyyy",
      end: work.end ? work.end : "End mm/yyyy",
      description: work.description
        ? work.description
        : "Improved conversion rate of our flagship product by introducing state of the art animations to our website's frontend",
    };
  });

  skillsCopy = skillsCopy.map((skills) => {
    return {
      skill: skills.skill ? skills.skill : "Skill",
      level: skills.level ? skills.level : "Expert",
    };
  });

  languagesCopy = languagesCopy.map((languages) => {
    return {
      language: languages.language ? languages.language : "Language",
      level: languages.level ? languages.level : "Native",
    };
  });

  return {
    personal: [
      {
        first: personal[0].first ? personal[0].first : "First Name",
        last: personal[0].last ? personal[0].last : "Last Name",
        job: personal[0].job ? personal[0].job : "Job Title",
        description: personal[0].description
          ? personal[0].description
          : "A Description about yourself goes here",
      },
    ],
    contact: [
      {
        email: contact[0].email
          ? contact[0].email
          : "email.adress@provider.country",
        phone: contact[0].phone ? contact[0].phone : "0123456789",
        city: contact[0].city ? contact[0].city : "City",
        country: contact[0].country ? contact[0].country : "Country",
      },
    ],

    education: educationCopy,
    work: workCopy,
    skills: skillsCopy,
    languages: languagesCopy,
  };
}

export { valuesOrPlaceholder };
