let conditions = {
  isChangedFromNormal: true,
  firefoxBrowser: (navigator.userAgent.indexOf("Firefox") > -1),
  menuIsOpenedPhone: false
};

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
    conditions.isChangedFromNormal = true;
  }

  if (conditions.isChangedFromNormal && conditions.firefoxBrowser && window.matchMedia('(max-width: 860px)').matches) {
    alert("При вашем разрешении экрана содержимое в браузере может отображаться некорректно, " +
      "для лучшего опыта воспользуйтесь, пожалуйста, другим браузером");
    conditions.isChangedFromNormal = false;
  }
}

recount();

window.addEventListener('resize', function () {
  recount();
});

window.addEventListener('orientationchange', function () {
  recount();
});

document.getElementById('hamburger-button').addEventListener('click', function () {
  if (conditions.menuIsOpenedPhone)
    document.getElementById('menu-backgr').style.left = "-100%";
  else
    document.getElementById('menu-backgr').style.left = "0";
  conditions.menuIsOpenedPhone = !(conditions.menuIsOpenedPhone);
})

let emailField = document.getElementById("email-field");
document.getElementById("subscribe").addEventListener('click', function () {
  if (emailField.value !== "") {
    emailField.style.transform = "scale(0.8)";
    emailField.style.transition = "200ms";
    setTimeout(
      function () {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-][a-zA-Z0-9-]+)*$/.test(emailField.value)) {
          emailField.value = "";
          emailField.placeholder = "Отлично! Проверь почту!";
        } else {
          emailField.style.color = "#ff0000";
          emailField.addEventListener('input', function () {
            emailField.style.color = "#343434";
          })
        }
        emailField.style.transform = "scale(1.0)";
      },
      200);
  }
});

let quantityStr = document.getElementById("people-quantity");
quantityStr.addEventListener('input', function () {
  if (quantityStr.value.length === 2)
    quantityStr.value = quantityStr.value[1];
  if (quantityStr.value === '' || quantityStr.value === '0')
    quantityStr.value = '1';
  if (quantityStr.value.length > 2 || quantityStr.value === '9')
    quantityStr.value = '8';
})

if (navigator.userAgent.indexOf("Trident") > -1) {
  alert("Ваш браузер слишком устарел, содержимое в нём может отображаться некорректно, " +
    "для лучшего опыта воспользуйтесь, пожалуйста, другим браузером");
}
