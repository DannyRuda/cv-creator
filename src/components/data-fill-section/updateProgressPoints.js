import { boxValuesFull } from "./updateProgressIndicator";

function checkProgressPoints(progressPointsReached,values) { 
        const {personal,contact,education,work,skills,languages} = values;
        const copyProgressPoints = Object.assign({},progressPointsReached);
       if(boxValuesFull(personal)) {
        copyProgressPoints.Personal = true;
       } else {
        copyProgressPoints.Personal = false;
       }
       if(boxValuesFull(contact)) {
        copyProgressPoints.Contact = true;
       } else {
        copyProgressPoints.Contact = false;
       }
       if(boxValuesFull(education)) {
        copyProgressPoints.Education = true;
       } else {
        copyProgressPoints.Education = false;
       }
       if(boxValuesFull(work)) {
        copyProgressPoints.Experience = true;
       } else {
        copyProgressPoints.Experience = false;
       }
       if(boxValuesFull(skills) && boxValuesFull(languages)) {
        copyProgressPoints.Additional = true;
       } else {
        copyProgressPoints.Additional = false;
       }
       console.log("checkProgressPoints",copyProgressPoints)
       return copyProgressPoints
}

export {checkProgressPoints}