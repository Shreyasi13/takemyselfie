var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function clickpic(){
    document.getElementById("textarea67").innerHTML = "";
    recognition.start();

}
recognition.onresult = function(event){
    console.log(event)
    var content = event.results[0][0].transcript;
    document.getElementById("textarea67").innerHTML = content
    console.log(content);
    if(content=="take my selfie"){
        console.log("taking selfie - - -");
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data =  "Taking selfie in 5 seconds";

    var utter = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utter);

Webcam.attach(camera)

setTimeout(function(){
takephoto();
save();
}, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality: 1080,

});

function takephoto(){
    Webcam.snap(function(data_uri){
     document.getElementById("results").innerHTML='<img id="selfie_image" src"'+data_uri+'">';
    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
link.href = image;
link.click();

}