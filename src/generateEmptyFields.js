function generateEmptyFields(box) {
    switch (box) {
      case "personal":
        return { first: "", last: "", job: "", description: "" };
        break;
      case "contact":
        return { country: "", city: "", phone: "", email: "" };
        break;
      case "education":
        return {
          graduation: "",
          institution: "",
          start: "",
          end: "",
          description: "",
        };
        break;
      case "work":
        return { position: "", company: "", start: "", end: "", description: "" };
        break;
      case "skills":
        return { skill: "", level: "" };
        break;
      case "languages":
        return { language: "", level: "" };
        break;
      default:
        break;
    }
  }

  export {generateEmptyFields}