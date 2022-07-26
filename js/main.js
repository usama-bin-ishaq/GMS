function show_result() {
  let ph = document.querySelector("#ph").value;
  let che = document.querySelector("#che").value;
  let bio = document.querySelector("#bio").value;
  let en = document.querySelector("#en").value;
  let ur = document.querySelector("#ur").value;

  let to =
    parseFloat(ph) +
    parseFloat(che) +
    parseFloat(bio) +
    parseFloat(en) +
    parseFloat(ur);
  let per=(to*100)/500;
   
  if(per>=90){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>a+";
  }else if(per>=80){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>a";
  }else if (per>=70){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>b+";
  }else if(per>=60){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>b";
  }else if (per>=50){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>c+";
  }else if (per>=40){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>c";
  }else if(per>=35){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>d+";
  }else if (per>=30){
    document.querySelector(".gra").innerHTML="<h4 style='color:white'>d";
  }else{
    document.querySelector(".gra").innerHTML="you are fail";
  }
  
  document.querySelector(".to").innerHTML = to;
  document.querySelector(".per").innerHTML= per;

  if(per>30){
    document.querySelector(".result h2").innerHTML=("you are pass");
  }else{
    document.querySelector(".result h2").innerHTML=("<h4 style='color:red'>you are fail");
  }

  if(ph.length==0){
    document.querySelector(".p h2").innerHTML=("<h2  style='color:red'> feild requaired a number");
  }else{
    document.querySelector(".p h2").innerHTML=("");
  }
  if(ph.length==0){
    document.getElementById("ph").style.borderColor = "red";
  }
  else{
    document.getElementById("ph").style.borderColor = "green";
  }
  if(che.length==0){
    document.querySelector(".c h2").innerHTML=("<h2  style='color:red'>feild requaired a number");
  }else{
    document.querySelector(".c h2").innerHTML=("");
  }
  if(che.length==0){
    document.getElementById("che").style.borderColor = "red";
  }else{
    document.getElementById("che").style.borderColor = "green";
  }if(bio.length==0){
    document.querySelector(".b h2").innerHTML=("<h2  style='color:red'>feild requaired a number");
  }else{
    document.querySelector(".b h2").innerHTML=("");
  }
  if(bio.length==0){
    document.getElementById("bio").style.borderColor = "red";
  }else{
    document.getElementById("bio").style.borderColor = "green";
  }if(en.length==0){
    document.querySelector(".e h2").innerHTML=("<h2  style='color:red'>feild requaired a number");
  }else{
    document.querySelector(".e h2").innerHTML=("");
  }
  if(en.length==0){
    document.getElementById("en").style.borderColor = "red";
  }else{
    document.getElementById("en").style.borderColor = "green";
  }if(ur.length==0){
    document.querySelector(".u h2").innerHTML=("<h2  style='color:red'>feild requaired a number");
  }else{
    document.querySelector(".u h2").innerHTML=("");
  }
  if(ur.length==0){
    document.getElementById("ur").style.borderColor = "red";
  }else{
    document.getElementById("ur").style.borderColor = "green";
  }
  if(ph>100 || che>100 || bio>100 || en>100 || ur>100 )
  {
    alert("Please Enter Marks in range of 100");
  }
   
}
function  reset (){
  // //  document.getElementById('mathnbr').value="";
  document.querySelector("#ph").value="";
  document.querySelector("#che").value="";
  document.querySelector("#bio").value="";
  document.querySelector("#en").value="";
  document.querySelector("#ur").value="";
  document.querySelector(".gra").innerHTML="";
  document.querySelector(".to").innerHTML = "";
  document.querySelector(".per").innerHTML= "";
  document.querySelector(".result").innerHTML="";
  document.querySelector(".p h2").innerHTML="";
  document.getElementById("ph").style.borderColor = "";
  document.querySelector(".c h2").innerHTML="";
  document.getElementById("che").style.borderColor = "";
  document.querySelector(".b h2").innerHTML="";
  document.getElementById("bio").style.borderColor = "";
  document.querySelector(".e h2").innerHTML="";
  document.getElementById("en").style.borderColor = "";
  document.querySelector(".u h2").innerHTML="";
  document.getElementById("ur").style.borderColor = "";
  // // result.innerHTML=`reset is working`;
}