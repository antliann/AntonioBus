function recount() {

  if (window.matchMedia('screen and (min-width: 1215px)').matches) {
    document.body.style.zoom = "1";
  }

  if (window.matchMedia('screen and (min-width: 500px) and (max-width: 1214px), screen and (max-width: 833px) and (orientation: landscape)').matches) {
    if (window.matchMedia('(max-width: 860px)').matches)
      document.body.style.zoom = (window.innerWidth / 880).toString();
    else document.body.style.zoom = "1";
  }

  if (window.matchMedia('screen and (max-width: 499px) and (orientation: portrait)').matches) {
    document.body.style.zoom = (window.innerWidth / 375).toString();
  }
}

window.addEventListener('resize', function (event) {
  recount();
});

let emailField = document.getElementById("email-field");

document.getElementById("subscribe").addEventListener('click', function (event) {
  if (emailField.value !== "") {
    emailField.style.transform = "scale(0.8)";
    emailField.style.transition = "200ms";
    setTimeout(
      function () {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailField.value)) {
          emailField.value = "";
          emailField.placeholder = "Отлично! Проверь почту!";
        } else {
          emailField.style.color = "#FF0000";
          emailField.addEventListener('click', function (event) {
            emailField.style.color = "#343434";
          })
        }
        emailField.style.transform = "scale(1.0)";
      },
      200);
  }
});

recount();
