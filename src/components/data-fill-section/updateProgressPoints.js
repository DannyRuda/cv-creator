import { boxValuesFull } from "./updateProgressIndicator";

function checkProgressPoints(state) { 
        console.log("updateProgressPoints was called",state)
        const {personal,contact,education,work,skills,languages} = state.values;
        const copyState = Object.assign({},state);
       if(boxValuesFull(personal)) {
        copyState.progressPointsReached.Personal = true;
       } else {
        copyState.progressPointsReached.Personal = false;
       }
       if(boxValuesFull(contact)) {
        copyState.progressPointsReached.Contact = true;
       } else {
        copyState.progressPointsReached.Contact = false;
       }
       if(boxValuesFull(education)) {
        copyState.progressPointsReached.Education = true;
       } else {
        copyState.progressPointsReached.Education = false;
       }
       if(boxValuesFull(work)) {
        copyState.progressPointsReached.Experience = true;
       } else {
        copyState.progressPointsReached.Experience = false;
       }
       if(boxValuesFull(skills) && boxValuesFull(languages)) {
        copyState.progressPointsReached.Additional = true;
       } else {
        copyState.progressPointsReached.Additional = false;
       }
       return copyState
}

export {checkProgressPoints}