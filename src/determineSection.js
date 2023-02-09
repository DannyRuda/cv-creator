function determineSection() {
    const viewWidth = window.innerWidth;
    if(viewWidth >= 1150 ) {
        return "both"
    } else {
        return "data-fill"
    }
}

export {determineSection}