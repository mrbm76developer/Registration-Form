var number = 1;
function CheckFields() {
    var arr=new Array();
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var fatherName = document.getElementById("father-name").value;
  var age = parseInt(document.getElementById("age").value);
  var phoneNumber = parseInt(document.getElementById("phone-number").value);
  if (firstName != "" && lastName != "" && fatherName != "") {
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = number;
    cell2.innerHTML = firstName;
    cell3.innerHTML = lastName;
    cell4.innerHTML = fatherName;
    cell5.innerHTML = age;
    cell6.innerHTML = phoneNumber;
    number++;
    let rowJson=JSON.stringify(row);
    window.localStorage.setItem("table",rowJson);
    console.log(localStorage);
  } else {
    alert("فیلد های ستاره دار را پر کنید");
  }
}
