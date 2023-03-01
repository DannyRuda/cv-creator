const autofillObject = {
  values: {
    personal: [
      {
        first: "Danny",
        last: "Ruda",
        job: "Junior Frontend Developer",
        description:
          "Hi, i am a self tought frontend developer since summer 2022. I found my passion for programming during my bachelors degree in mechanical engineering where i came in contact with progrramming for the first time. After pursuring my degree for a little longer i realised i wanted to become a full fledged programmer and decided to learn programming on my own. Since then i created multiple astounding projects as you can see on my portfolio site",
      },
    ],
    contact: [
      {
        country: "Germany",
        city: "Duisburg",
        phone: "015201420439",
        email: "danny.ruda1997@gmail.com",
      },
    ],
    education: [
      {
        graduation: "B.Sc Maschinenbau",
        institution: "Ruhr-Universität Bochum",
        start: "10/2017",
        end: "ongoing",
        description:
          "Completed all necessary modules except for the internship and the bachelors thesis. Current average score is 2.3! In my semester thesis i programmed and designed the controlling system for a sorting machine with SPS controlling and scored a 1.7",
      },
      {
        graduation: "Abitur",
        institution: "Gymnasium Eickel",
        start: "08/2014",
        end: "06/2017",
        description:
          "Completed my Abitur as one of the top 5 scoring students within my year with a score of 1.9. Additionally i participated at the biology project course where we showed engagement for local natural reserve areas with our work to keep the biodiverity as high as possible",
      },
    ],
    work: [
      {
        position: "Working Student Frontend Development",
        company: "Imaginary Inc.",
        start: "11/2022",
        end: "02/2023",
        description:
          "Programmed a new landing page on my own which increased the coversion rate for the products about 15% on average while the sales for the flagship product went up by about 30% leading to an increase in revenue by about 43%",
      },
    ],
    skills: [
      { skill: "ReactJS", level: "Expert" },
      { skill: "JavaScript ES6", level: "Expert" },
      { skill: "CSS3", level: "Proficient" },
      { skill: "HTML5", level: "Proficient" },
      { skill: "Git", level: "Advanced" },
      { skill: "Npm Package Manager", level: "Advanced" },
      { skill: "Webpack bundler", level: "Proficient" },
      { skill: "Visual Studio Code", level: "Expert" },
    ],
    languages: [
      { language: "German", level: "Native" },
      { language: "English", level: "Fluent" },
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

const clearObject = {
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

//const clearObjectF =

const autoFillValues = {
  personal: [
    {
      first: "Danny",
      last: "Ruda",
      job: "Junior Frontend Developer",
      description:
        "Hi, i am a self tought frontend developer since summer 2022. I found my passion for programming during my bachelors degree in mechanical engineering where i came in contact with progrramming for the first time. After pursuring my degree for a little longer i realised i wanted to become a full fledged programmer and decided to learn programming on my own. Since then i created multiple astounding projects as you can see on my portfolio site",
    },
  ],
  contact: [
    {
      country: "Germany",
      city: "Duisburg",
      phone: "015201420439",
      email: "danny.ruda1997@gmail.com",
    },
  ],
  education: [
    {
      graduation: "B.Sc Maschinenbau",
      institution: "Ruhr-Universität Bochum",
      start: "10/2017",
      end: "ongoing",
      description:
        "Completed all necessary modules except for the internship and the bachelors thesis. Current average score is 2.3! In my semester thesis i programmed and designed the controlling system for a sorting machine with SPS controlling and scored a 1.7",
    },
    {
      graduation: "Abitur",
      institution: "Gymnasium Eickel",
      start: "08/2014",
      end: "06/2017",
      description:
        "Completed my Abitur as one of the top 5 scoring students within my year with a score of 1.9. Additionally i participated at the biology project course where we showed engagement for local natural reserve areas with our work to keep the biodiverity as high as possible",
    },
  ],
  work: [
    {
      position: "Working Student Frontend Development",
      company: "Imaginary Inc.",
      start: "11/2022",
      end: "02/2023",
      description:
        "Programmed a new landing page on my own which increased the coversion rate for the products about 15% on average while the sales for the flagship product went up by about 30% leading to an increase in revenue by about 43%",
    },
  ],
  skills: [
    { skill: "ReactJS", level: "Expert" },
    { skill: "JavaScript ES6", level: "Expert" },
    { skill: "CSS3", level: "Proficient" },
    { skill: "HTML5", level: "Proficient" },
    { skill: "Git", level: "Advanced" },
    { skill: "Npm Package Manager", level: "Advanced" },
    { skill: "Webpack bundler", level: "Proficient" },
    { skill: "Visual Studio Code", level: "Expert" },
  ],
  languages: [
    { language: "German", level: "Native" },
    { language: "English", level: "Fluent" },
  ],
};

const clearValues = {
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
};

export { autofillObject, clearObject, clearValues,autoFillValues };
