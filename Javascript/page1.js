var list = new Array();
function addData() {
  getData();
  list.push({
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    fatherName: document.getElementById("father-name").value,
    age: document.getElementById("age").value,
    phonNumber: document.getElementById("phone-number").value,
  });
  localStorage.setItem("localData", JSON.stringify(list));
  showData();
  console.log(localStorage);
  
}
function getData() {
  var str = localStorage.getItem("localData");
  if (str != null) list = JSON.parse(str);
}
function deleteAllData() {
  localStorage.clear();
}
function showData() {
  getData();
  var table = document.getElementById("table");
  var x = table.rows.length;
  while (--x) {
    table.deleteRow(x);
  }
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
