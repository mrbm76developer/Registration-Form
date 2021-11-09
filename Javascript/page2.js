var list = new Array();
var str=new Array();
var s=new Array();

function getData() {
   str = localStorage.getItem("localData");
   if (str != null) list = JSON.parse(str);
  console.log("2222"+list+"0000000");
  console.log("$$$$"+str+"@@@");
 
  // document.getElementById("test").innerHTML=list;
  
}

function showData() {
  getData();
  var table = document.getElementById("table");
  for (i = 0; i < list.length; i++) {
    var row = table.insertRow(-1);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(1);
    var cell4 = row.insertCell(2);
    var cell5 = row.insertCell(3);
    var cell6 = row.insertCell(4);
    cell2.innerHTML = list[i].firstName;
    cell3.innerHTML = list[i].lastName;
    cell4.innerHTML = list[i].fatherName;
    cell5.innerHTML = list[i].age;
    cell6.innerHTML = list[i].phonNumber;
  
  }
 }
function Search() {
  getData();
  var search = document.getElementById("user-search").value;
//  if(search===)
}
function searchtest(nameKey) {
  var item=str.find((element)=> element.firstName===nameKey);
  return item;
  }
  

