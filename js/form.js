//form redirect
function validate_form() {
  const form = document.getElementById("form");
  const origin_URL = window.location.origin;
  form.addEventListener("submit", function (e) {
    window.location.assign(origin_URL + "/thank-you.html");
  });

  return;
}
validate_form();
