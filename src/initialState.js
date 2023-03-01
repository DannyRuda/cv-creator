const initialState = {
  values: {
    personal: [{ first: "", last: "", job: "", description: "" }],
    contact: [{ country: "", city: "", phone: "", email: "" }],
    education: [
      {
        graduation: "",
        institution: "",
        start: "",
        end: "",
        description: "",
      },
    ],
    work: [{ position: "", company: "", start: "", end: "", description: "" }],
    skills: [
      { skill: "", level: "" },
      { skill: "", level: "" },
    ],
    languages: [
      { language: "", level: "" },
      { language: "", level: "" },
    ],
  },
  progressPointsReached: {
    Personal: false,
    Contact: false,
    Education: false,
    Experience: false,
    Additional: false,
  },
  sections: "both",
  width: "",
};

const initialValues = {
  personal: [{ first: "", last: "", job: "", description: "" }],
  contact: [{ country: "", city: "", phone: "", email: "" }],
  education: [
    {
      graduation: "",
      institution: "",
      start: "",
      end: "",
      description: "",
    },
  ],
  work: [{ position: "", company: "", start: "", end: "", description: "" }],
  skills: [
    { skill: "", level: "" },
    { skill: "", level: "" },
  ],
  languages: [
    { language: "", level: "" },
    { language: "", level: "" },
  ],
}

const initialProgressPoints = {
  Personal: false,
  Contact: false,
  Education: false,
  Experience: false,
  Additional: false,
}

export { initialState,initialValues,initialProgressPoints };
