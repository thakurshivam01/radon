function date(){
    console.log("02-06-2022")
}

function month(){
    console.log("June")
}
function batchInfo(){
    console.log("Radon, W3D3, the topic for today is Nodejs module system’")
}


module.exports.getdate=date;
module.exports.getmonth=month;
module.exports.getbatch=batchInfo;


