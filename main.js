Webcam.set({
    width:400,
    height: 400,
    image_format: 'png',
    png_quality: 100
});

camera = document.getElementById("webcam_view");

Webcam.attach(camera);

function takeimage(){
    Webcam.snap(function(data_url){
        document.getElementById("captured_img").innerHTML = "<img src = '"+data_url+"' id = 'image_taken'>";
    });
}

console.log("ml5 version is: "+ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1uiEWBNyt/model.json', modelLoaded)

function modelLoaded(){
    console.log("Model Loaded !");

}