var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});
s3 = new AWS.S3({apiVersion: '2006-03-01'});
var uploadParams = {Bucket: "test-superkart", Key: '', Body: ''};
var file = "hell.jpeg";
var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error', err);
});
uploadParams.Body = fileStream;
var path = require('path');
uploadParams.Key = path.basename(file);

s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});
var rekognition = new AWS.Rekognition();
var bucket="test-superkart"
var model='arn:aws:rekognition:us-east-2:153328009815:project/SuperKart/version/SuperKart.2020-04-16T01.13.01/1586979781848'
var min_confidence=45
var params = {
    Image: {'S3Object': {'Bucket': bucket, 'Name': "hell.jpeg"}},
        MinConfidence: min_confidence,
        ProjectVersionArn: model
}
rekognition.detectCustomLabels(params,function (err, data) {
    if (err) 
        console.log(err, err.stack); // an error occurred
    else {
        labels = data["CustomLabels"]
        // labels = labels.filter((label)=>{
        //     return 
        // })
        console.log(labels.length)
        console.log(labels)
    }})