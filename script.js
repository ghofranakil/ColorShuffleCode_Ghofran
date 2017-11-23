var image=null;
var canvas;

function upload(){
  canvas=document.getElementById("can");
  var fileinput=document.getElementById("finput");
  filename=fileinput.value;
  alert("Chose" + filename);
  finput.drawTo(canvas);
}

function changeGray(){
  for(var pixel of grayimage.values()){
    var avg=(pixel.getRed() +pixel.getGreen() +pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  grayimage.drawTo(canvas);
}

function changeRed(){
  for(var pixel of redimage.values()){
    var avg=(pixel.getRed() +pixel.getGreen() +pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
  redimage.drawTo(canvas);
}
