var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["sid"] = document.getElementById("sid").value;
    formData["mail"] = document.getElementById("mail").value;
    formData["classs"] = document.getElementById("classs").value;
	formData["year"] = document.getElementById("year").value;
	formData["city"] = document.getElementById("city").value;
	formData["country"] = document.getElementById("country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sid;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.classs;
	cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.year;
	cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.city;
	cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.country;
	cell7=newRow.insertCell(7);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDel(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("sid").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("classs").value = "";
	document.getElementById("year").value = "";
	document.getElementById("city").value = "";
	document.getElementById("country").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sid").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("classs").value = selectedRow.cells[3].innerHTML;
	document.getElementById("year").value = selectedRow.cells[4].innerHTML;
	document.getElementById("city").value = selectedRow.cells[5].innerHTML;
	document.getElementById("country").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.sid;
    selectedRow.cells[2].innerHTML = formData.mail;
    selectedRow.cells[3].innerHTML = formData.classs;
	selectedRow.cells[4].innerHTML = formData.year;
	selectedRow.cells[5].innerHTML = formData.city;
	selectedRow.cells[5].innerHTML = formData.country;
}

function onDel(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
