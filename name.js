//function Loadjson(file,callback) {
//var xhr =new XMLHttpRequest();
//xhr.overrideMimeType("application/json");
//xhr.open("GET",file,true);
//xhr.onreadystatechange = function () {
  //  if(xhr.readyState === 4 && xhr.status == "200"){
    //  callback(xhr.responseText);
//}
//};

//xhr.send(null);
//}
//Loadjson("data.json",function(text)
//{
//  var data = JSON.parse(text);
  //console.log(data);
//  basics(data.details);
//  careerinfo(data.career);
//  Education(data.education);
  //Skills(data.skills);
//  Achievements(data.Achievements);

//})

function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })
}
var newFile = loadjson("data.json");
newFile.then(data=>{
  console.log(data);
 basics(data.details);
 careerinfo(data.career);
 Education(data.education);
  Skills(data.skills);
 Achievements(data.Achievements);
})
var child1 = document.querySelector(".childone")
var child2 = document.querySelector(".childtwo")
function basics(det) {
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h4");
  name.textContent = det.name;
  child1.appendChild(name);

  var phone = document.createElement("h4");
  phone.textContent = det.phno;
  child1.appendChild(phone);

var email = document.createElement("a");
email.href = "mailto: hemanijasti0699@gmail.com";
email.textContent=det.email;
child1.appendChild(email);

var add = document.createElement("h2");
add.textContent="Address:";
child1.appendChild(add);

var hr = document.createElement("hr");
child1.appendChild(hr);

var p = document.createElement("p");
p.textContent=det.Address;
child1.appendChild(p);

  }
var child2 = document.querySelector(".childtwo")
function careerinfo(info){

var car= document.createElement("h2");
car.textContent="Career Objective";
child2.appendChild(car);

var hr = document.createElement("hr");
child2.appendChild(hr);

  var c = document.createElement("p");
  c.textContent= info.info;
  child2.appendChild(c);
}

function Education(edu) {
var hd = document.createElement("h2");
hd.textContent="Educational Qualification";
child2.appendChild(hd);

var hr = document.createElement("hr");
child2.appendChild(hr);

var table1 = document.createElement("table");
table1.border="1";
child2.appendChild(table1);

tabledata="";
for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].qualifiation+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].Percentage+"</td></tr>";
}
table1.innerHTML=tabledata;

}
function Skills(skillinfo) {

  var hd = document.createElement("h2");
  hd.textContent="Technical Skils";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

for(i=0;i<skillinfo.length;i++){
  var title = document.createElement("h4");
  title.textContent=skillinfo[i].title;
  child2.appendChild(title);

  var eduul = document.createElement("ul");
  var eduli = document.createElement("li");
  eduli.textContent=skillinfo[i].info;
  eduul.appendChild(eduli);
  child2.appendChild(eduul);
}
}
function Achievements(info) {
  var hd = document.createElement("h2");
  hd.textContent="Achievements";
  child2.appendChild(hd);

  var hr = document.createElement("hr");
  child2.appendChild(hr);

  for(i=0;i<info.length;i++){
    var title = document.createElement("h4");
    title.textContent=info[i].title;
    child2.appendChild(title);

    var eduul = document.createElement("ul");
    var eduli = document.createElement("li");
    eduli.textContent=info[i].info;
    eduul.appendChild(eduli);
    child2.appendChild(eduul);
}
}
function openpage(){
  window.open("resume.html","_self",true)
}
