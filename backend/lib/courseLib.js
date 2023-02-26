const courseModel = require('../models/courseModel');

module.exports.getAllCourses=async function(){
    return await courseModel.find({});
}
module.exports.createFirstCourse = async function(courseInput){
    const course= new courseModel(courseInput);
    await course.save();
}
module.exports.updateCourse = async function(courseId,updatedInput){
await courseMode.findOneAndUpdate({_id:courseId,courseInput})
}
module.exports.createFirstCourse = async function(){
    const courses= await courseModel.find({});
    if(courses && courses.length == 0){
    const firstCourseInput = {
        "title": "bz DSA",
        "level": "easy"
    };
    const course = new courseModel(firstCourseInput);
    await course.save();}
}