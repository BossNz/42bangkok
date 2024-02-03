$("#addNew").click(function () {
  addItem();
});
function addItem() {
  var text = prompt("This is a prompt box", "this is simple text");
  var list = new Date();
  setCookie("obj" + list.getTime(), encodeURI(text));
  checkForObjectives();
}

function setCookie(sName, sValue) {
  document.cookie = sName + "=" + escape(sValue);
  var date = new Date();
  date.setMonth(date.getYear() + 1);
  document.cookie += "; expires=" + date.toUTCString();
}

function unsetCookie(sName) {
  document.cookie = sName + "=; expires=Fri, 31 Dec 1999 23:59:59 GMT;";
}

function checkForObjectives() {
  var list = document.getElementById("list");
  list.innerHTML = "";
  var cookies = document.cookie.split("; ");
  cookies.sort(
    (a, b) =>
      b.replace("obj", "").split("=")[0] - a.replace("obj", "").split("=")[0]
  );
  for (var i = 0; i < cookies.length; i++) {
    var part = cookies[i].split("=");
    if (part[0].indexOf("obj") === 0) {
      try {
        addListItem(part[0], decodeURIComponent(part[1]));
      } catch (error) {
        console.log(error.message + " " + part[1]);
      }
    }
  }
}

function addListItem(id, text) {
  var list = document.getElementById("list");
  list.innerHTML +=
    "<li id=" +
    id +
    ">" +
    text +
    " <button onclick=\"deleteItem('" +
    id +
    "')\">X</button></li>";
}

function deleteItem(id) {
  if (confirm("u want delete that?")) {
    document.getElementById(id).style.display = "none";
    unsetCookie(id);
  }
}
