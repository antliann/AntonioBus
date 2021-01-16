let isChangedFromNormal = { result: true };

function recount() {
  if (window.matchMedia('(max-width: 499px) and (orientation: portrait)').matches) {
    document.body.style.zoom = ((window.innerWidth) / 375).toString();
  }

  if (window.matchMedia('(min-width: 500px) and (max-width: 1214px), ' +
    '(max-width: 833px) and (orientation: landscape)').matches) {
    if (window.matchMedia('(max-width: 860px)').matches)
      document.body.style.zoom = (window.innerWidth / 880).toString();
    else {
      document.body.style.zoom = "1";
    }
  }

  if (window.matchMedia('(min-width: 1215px)').matches) {
    document.body.style.zoom = "1";
    isChangedFromNormal.result = true;
  }

  if (isChangedFromNormal.result && navigator.userAgent.indexOf("Firefox") > -1 && window.matchMedia('(max-width: 860px)').matches) {
      alert("При вашем разрешении экрана содержимое в браузере может отображаться некорректно, " +
        "для лучшего опыта воспользуйтесь, пожалуйста, другим браузером");
      isChangedFromNormal.result = false;
  }
}

window.addEventListener('resize', function () {
  recount();
});

window.addEventListener('orientationchange', function () {
  recount();
});

let emailField = document.getElementById("email-field");

document.getElementById("subscribe").addEventListener('click', function () {
  if (emailField.value !== "") {
    emailField.style.transform = "scale(0.8)";
    emailField.style.transition = "200ms";
    setTimeout(
      function () {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailField.value)) {
          emailField.value = "";
          emailField.placeholder = "Отлично! Проверь почту!";
        } else {
          emailField.style.color = "#ff0000";
          emailField.addEventListener('click', function () {
            emailField.style.color = "#343434";
          })
        }
        emailField.style.transform = "scale(1.0)";
      },
      200);
  }
});

recount();

if (navigator.userAgent.indexOf("Trident") > -1) {
  alert("Ваш браузер слишком устарел, содержимое в нём может отображаться некорректно, " +
    "для лучшего опыта воспользуйтесь, пожалуйста, другим браузером");
}
