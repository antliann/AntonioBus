let conditions = {
  isChangedFromNormal: true,
  menuIsOpenedPhone: false,
  firefoxBrowser: (navigator.userAgent.indexOf("Firefox") > -1),
};

function recount() {
  if (window.matchMedia('(max-width: 499.99px)').matches) {
    document.body.style.zoom = ((window.innerWidth) / 375).toString();
  }
  if (window.matchMedia('(min-width: 500px) and (max-width: 1214.99px)').matches) {
    if (window.matchMedia('(max-width: 860px)').matches)
      document.body.style.zoom = (window.innerWidth / 860).toString();
    else
      document.body.style.zoom = "1";
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

let bar1 = document.getElementById("menu-bar-1");
let bar2 = document.getElementById("menu-bar-2");
let bar3 = document.getElementById("menu-bar-3");

function middleState() {
  bar1.style.width = "36px";
  bar2.style.width = "36px";
  bar3.style.width = "36px";
  bar1.style.transform = "translateX(-14px) translateY(10px) rotate(-90deg)";
  bar2.style.transform = "rotate(-90deg)";
  bar3.style.transform = "translateX(14px) translateY(-10px) rotate(-90deg)";
  bar2.style.background = "rgba(255, 255, 255, 0.5)";
}

function hamburger() {
  setTimeout(function () {
    bar1.style.transform = "";
    bar1.style.width = "";
    bar2.style.transform = "";
    bar2.style.width = "";
    bar2.style.background = "";
    bar3.style.transform = "";
    bar3.style.width = "";
  }, 140);
}

function cross() {
  setTimeout(function () {
    bar1.style.transform = "translateY(10px) translateX(-6px) rotate(-45deg)";
    bar1.style.width = "40px";
    bar2.style.width = "40px";
    bar2.style.background = "transparent";
    bar3.style.transform = "translateY(-10px) translateX(-6px) rotate(-135deg)";
    bar3.style.width = "40px";
  }, 140);
}

let scrollUp = function () {
  window.scroll(0,0)
}
document.getElementById('hamburger-button').addEventListener('click', function () {
  middleState();
  if (conditions.menuIsOpenedPhone) {
    document.getElementById('menu-backgr').style.left = "-100%";
    hamburger();
    removeEventListener('scroll', scrollUp);
  } else {
    document.getElementById('menu-backgr').style.left = "0";
    cross();
    addEventListener('scroll', scrollUp);
  }
  conditions.menuIsOpenedPhone = !(conditions.menuIsOpenedPhone);
})

let emailField = document.getElementById("email-field");
document.getElementById("subscribe").addEventListener('click', function () {
  if (emailField.value !== "") {
    emailField.style.transform = "scale(0.8)";
    emailField.style.transition = "200ms";
    setTimeout(function () {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-][a-zA-Z0-9-]+)*$/.test(emailField.value)) {
          emailField.value = "";
          emailField.placeholder = "Отлично! Проверь почту!";
        } else {
          emailField.style.color = "#ff0000";
          emailField.addEventListener('input', function () {
            emailField.style.color = "";
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
