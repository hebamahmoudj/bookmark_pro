var siteName = document.getElementById("siteName"),
  siteUrl = document.getElementById("siteUrl"),
  data = [],
  showdata = document.getElementById("data");
function send() {
  if (siteUrl.value == null || siteUrl.value == " ") {
    // showUrlError("Url Field is required");
    window.alert("url is required");
  }
  if (siteName.value == null || siteName.value == "") {
    // showNameError("Name is required");
    window.alert("site name is required");
  } else {
    add();
  }
}
function showNameError(msg) {
  var nameError = document.getElementById("nameError");
  nameError.innerHTML = msg;
  nameError.style.display = "block";
}

function showUrlError(msg) {
  var urlError = document.getElementById("urlError");
  urlError.innerHTML = msg;
  urlError.style.display = "block";
}

function add() {
  var links = { siteName: siteName.value, siteUrl: siteUrl.value };
  data.push(links);

  // validation();
  // if (links.siteName != " " && links.siteUrl != " ") {
  submit();
  clr();
  // }

  // clr();
}
function submit() {
  var x = " ";
  for (var i = 0; i < data.length; i++) {
    x +=
      "<div   id='data' >" +
      data[i].siteName +
      '<button class="btn btn-primary btn1">' +
      "<a href=" +
      data[i].siteUrl +
      " > " +
      "Visit </a></button><button class='btn btn-danger btn2' onclick='deletee(" +
      i +
      ")'> delete</button>' </div>";
  }

  showdata.innerHTML = x;
}

function clr() {
  links = {
    siteName: (siteName.value = " "),
    siteUrl: (siteUrl.value = " "),
  };
}
function deletee(ind) {
  data.splice(ind, 1);

  submit();
  // window.alert(ind);
}

function validation() {
  if (links.siteName == " ") {
    document.getElementById("validate").innerHTML =
      "<p>this field is required</p>";
  } else if (links.siteUrl == " ") {
    document.getElementById("validate2").innerHTML =
      "<p>this field is required</p>";
  }
}
