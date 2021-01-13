function recount() {

  if (window.matchMedia('screen and (min-width: 1215px)').matches) {
    document.body.style.zoom = "1";
    for (let i = 1; i < 10; i++) {
      if (document.getElementById('desktop' + i))
        document.getElementById('desktop' + i).style.display = "unset";
      if (document.getElementById('tablet' + i))
        document.getElementById('tablet' + i).style.display = "none";
      if (document.getElementById('phone' + i))
        document.getElementById('phone' + i).style.display = "none"
    }
  }

  if (window.matchMedia('screen and (min-width: 834px) and (max-width: 1214px), screen and (max-width: 833px) and (orientation: landscape)').matches) {
    if (window.matchMedia('(max-width: 860px) and (orientation: landscape)').matches)
      document.body.style.zoom = (window.innerWidth / 880).toString();
    else document.body.style.zoom = "1";
    for (let j = 1; j < 10; j++) {
      if (document.getElementById('desktop' + j))
        document.getElementById('desktop' + j).style.display = "none";
      if (document.getElementById('tablet' + j))
        document.getElementById('tablet' + j).style.display = "unset";
      if (document.getElementById('phone' + j))
        document.getElementById('phone' + j).style.display = "none";
    }
  }

  if (window.matchMedia('screen and (max-width: 833px) and (orientation: portrait)').matches) {
    document.body.style.zoom = (window.innerWidth / 375).toString();
    document.getElementById('bus-photo').style.display = "none";
    for (let k = 1; k < 10; k++) {
      if (document.getElementById('desktop' + k))
        document.getElementById('desktop' + k).style.display = "none";
      if (document.getElementById('tablet' + k))
        document.getElementById('tablet' + k).style.display = "none";
      if (document.getElementById('phone' + k))
        document.getElementById('phone' + k).style.display = "unset";
    }
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
