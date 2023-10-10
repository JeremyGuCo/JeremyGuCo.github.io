function showAlert() {
  var alertElement = document.getElementById("alert");
  alertElement.classList.remove("hide");

  setTimeout(function () {
    alertElement.classList.add("hide");
  }, 5000);
}
