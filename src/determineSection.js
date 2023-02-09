function determineSection(sections, width) {

  const viewWidth = window.innerWidth;
    console.log(sections);
  console.log(viewWidth)
  console.log(width)

  if (viewWidth >= 1150) {
    console.log("returned both")
    return "both";
  } else if (sections === "both") {
    return "data-fill";
  } else {
    return sections === "data-fill" ? "cv-preview" : "data-fill";
  }
}

function determineWidth(width) {
  console.log(width);
  if (width !== window.innerWidth) {
    console.log(window.innerWidth);
    return window.innerWidth;
  } else {
    return width;
  }
}

export { determineSection, determineWidth };
