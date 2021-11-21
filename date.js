
module.exports.getDate = function() {
    
    let today= new Date();
    let options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);


}

module.exports.getDateHindi = getDateHindi;

function getDateHindi() {
    let today= new Date();
    let options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("hi-IN", options);


}