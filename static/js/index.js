function clos() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modal1").style.display = "none";
    document.getElementById("modal2").style.display = "none";
    document.getElementById("modal3").style.display = "none";
    document.getElementById("modal4").style.display = "none";
    document.getElementById("modal5").style.display = "none";
    document.getElementById("modal6").style.display = "none";
    document.getElementById("modal7").style.display = "none";
    document.getElementById("modal8").style.display = "none";
    document.getElementById("modal9").style.display = "none";
    document.getElementById("modal10").style.display = "none";
  }

  function clos1() {
    document.getElementById("modal7").style.display = "none";
  }

  function clos2() {
    document.getElementById("modal8").style.display = "none";
  }
  
  function openModal() {
      document.getElementById("modal").style.display = "block";
  }
  
  function openModal1() {
    document.getElementById("modal1").style.display = "block";
  }

  function openModal2() {
    document.getElementById("modal2").style.display = "block";
  }

  function openModal3() {
    document.getElementById("modal3").style.display = "block";
  }

  function openModal4() {
    clos()
    document.getElementById("modal4").style.display = "block";
  }

  function openModal5() {
    clos()
    document.getElementById("modal5").style.display = "block";
  }

  function openModal6() {
    clos()
    document.getElementById("modal6").style.display = "block";
  }

  function openModal7() {
    document.getElementById("modal7").style.display = "block";
  }

  function openModal8() {
    document.getElementById("modal8").style.display = "block";
  }
  
  function openModal9() {
    document.getElementById("modal9").style.display = "block";
  }

  function openModal10() {
    document.getElementById("modal10").style.display = "block";
  }

  window.onclick = function(event) { 
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  
    else if (event.target == modal1) {
      modal1.style.display = 'none';
    }

    else if (event.target == modal2) {
      modal2.style.display = 'none';
    }

    else if (event.target == modal3) {
      modal3.style.display = 'none';
    }

    else if (event.target == modal4) {
      modal4.style.display = 'none';
    }

    else if (event.target == modal5) {
      modal5.style.display = 'none';
    }

    else if (event.target == modal6) {
      modal6.style.display = 'none';
    }

    else if (event.target == modal7) {
     modal7.style.display = 'none';
    }

    else if (event.target == modal8) {
      modal8.style.display = 'none';
    }

    else if (event.target == modal9) {
      modal9.style.display = 'none';
    }

    else if (event.target == modal10) {
      modal10.style.display = 'none';
    }
  }





let div1 = document.getElementById('did1');
let div2 = document.getElementById('did2');
let div3 = document.getElementById('did3');
let div4 = document.getElementById('did4');
let div5 = document.getElementById('did5');
let div6 = document.getElementById('did6');
let div7 = document.getElementById('did7');
let div = document.getElementById('did');

let button = document.getElementById('color_menu_settings');
let button1 = document.getElementById('color_menu_settings1');
let button2 = document.getElementById('color_menu_settings2');
let button3 = document.getElementById('color_menu_settings3');
let button4 = document.getElementById('color_menu_settings4');
let button5 = document.getElementById('color_menu_settings5');
let button6 = document.getElementById('color_menu_settings6');
let button7 = document.getElementById('color_menu_settings7');

rch1()

function rch1() {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';

    button.className = 'chenge_settings color_menu_settings_teg';
    button1.className = "chenge_settings";
    button2.className = "chenge_settings";
    button3.className = "chenge_settings";
    button4.className = "chenge_settings";
    button5.className = "chenge_settings";
    button6.className = "chenge_settings";
    button7.className = "chenge_settings";

    div.style.display = 'block';
}

function rch2() {
    div.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';

    button.className = 'chenge_settings';
    button1.className = "chenge_settings color_menu_settings_teg";
    button2.className = "chenge_settings";
    button3.className = "chenge_settings";
    button4.className = "chenge_settings";
    button5.className = "chenge_settings";
    button6.className = "chenge_settings";
    button7.className = "chenge_settings";

    div1.style.display = 'block';
}

function rch3() {
    div1.style.display = 'none';
    div.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';

    button.className = 'chenge_settings';
    button1.className = "chenge_settings";
    button2.className = "chenge_settings color_menu_settings_teg";
    button3.className = "chenge_settings";
    button4.className = "chenge_settings";
    button5.className = "chenge_settings";
    button6.className = "chenge_settings";
    button7.className = "chenge_settings";

    div2.style.display = 'block';
}

function rch4() {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';

    button.className = 'chenge_settings';
    button1.className = "chenge_settings";
    button2.className = "chenge_settings";
    button3.className = "chenge_settings color_menu_settings_teg";
    button4.className = "chenge_settings";
    button5.className = "chenge_settings";
    button6.className = "chenge_settings";
    button7.className = "chenge_settings";

    div3.style.display = 'block';
}


function rch5() {
    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';

    button.className = 'chenge_settings';
    button1.className = "chenge_settings";
    button2.className = "chenge_settings";
    button3.className = "chenge_settings";
    button4.className = "chenge_settings color_menu_settings_teg";
    button5.className = "chenge_settings";
    button6.className = "chenge_settings";
    button7.className = "chenge_settings";

    div4.style.display = 'block';
}

function rch6() {
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div.style.display = 'none';
  div6.style.display = 'none';
  div7.style.display = 'none';

    button.className = 'chenge_settings';
    button1.className = "chenge_settings";
    button2.className = "chenge_settings";
    button3.className = "chenge_settings";
    button4.className = "chenge_settings";
    button5.className = "chenge_settings color_menu_settings_teg";
    button6.className = "chenge_settings";
    button7.className = "chenge_settings";

  div5.style.display = 'block';
}

function rch7() {
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div.style.display = 'none';
  div7.style.display = 'none';

  button.className = 'chenge_settings';
  button1.className = "chenge_settings";
  button2.className = "chenge_settings";
  button3.className = "chenge_settings";
  button4.className = "chenge_settings";
  button5.className = "chenge_settings";
  button6.className = "chenge_settings color_menu_settings_teg";
  button7.className = "chenge_settings";

  div6.style.display = 'block';
}

function rch8() {
  div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'none';
  div4.style.display = 'none';
  div5.style.display = 'none';
  div6.style.display = 'none';
  div.style.display = 'none';

  button.className = 'chenge_settings';
  button1.className = "chenge_settings";
  button2.className = "chenge_settings";
  button3.className = "chenge_settings";
  button4.className = "chenge_settings";
  button5.className = "chenge_settings";
  button6.className = "chenge_settings";
  button7.className = "chenge_settings color_menu_settings_teg";

  div7.style.display = 'block';
}




$(document).ready(function() {
  $("#reg").click(function() {
      // Отримання значень полів вводу
      var code = $("#code").val();
 
      // Відправка POST-запиту на сервер
      $.ajax({
        type: "POST",
        url: "/git",
        contentType: "application/json;charset=UTF-8", // Додати contentType
        dataType: "json", // Додати dataType
        data: JSON.stringify({
          code: code
        }),
        success: function(response) {
          if (response.message === 1){
            $('.idfghjb').text("You are successfully registered, wait a few seconds.");
            togglePopup()
          }
          if (response.message === 2){
            $('.idfghjb').text("Invalid code.");
            togglePopup()
          }
          if (response.message === 3){
            $('.idfghjb').text("No more attempts, please try to register again.");
            togglePopup()
          }
        },
        error: function(error) {
            console.log(error);
        }
      });
  });
});











document.getElementById("submitButton").addEventListener("click", function() {
  // Отримуємо значення введені в поля
  var nickname = document.getElementById("nicknameInput").value;
  var password = document.getElementById("passwordInput").value;
  var confirmPassword = document.getElementById("confirmPasswordInput").value;
  var iddiscord = document.getElementById("iddiscord").value;

  // Перевіряємо, чи всі поля заповнені
  if (nickname && password && confirmPassword && iddiscord) {
      // Перевіряємо, чи пароль і підтвердження паролю співпадають
      if (password === confirmPassword) {
              // Отримання значень полів вводу
              var nickname = $("#nicknameInput").val();
              var password = $("#passwordInput").val();
              var confirmPassword = $("#confirmPasswordInput").val();
              var iddiscord = $("#iddiscord").val();
         
              // Відправка POST-запиту на сервер
              $.ajax({
                type: "POST",
                url: "/",
                contentType: "application/json;charset=UTF-8", // Додати contentType
                dataType: "json", // Додати dataType
                data: JSON.stringify({
                    nickname: nickname,
                    password: password,
                    confirmPassword: confirmPassword,
                    iddiscord: iddiscord
                }),
                success: function(response) {
                    console.log(response.message);
                },
                error: function(error) {
                    console.log(error);
                }
            });
            clos()
            openModal2()
      } else {
          // Якщо пароль і підтвердження паролю не співпадають, виводимо повідомлення про помилку
          console.error("Password and confirm password do not match");
      }
  } else {
      // Якщо не всі поля заповнені, виводимо повідомлення про помилку
      console.error("All fields are required");
  }
});













document.getElementById("login_log").addEventListener("click", function() {
  // Отримуємо значення введені в поля
  var nickname_log = document.getElementById("name_login").value;
  var password_log = document.getElementById("code_login").value;

  // Перевіряємо, чи всі поля заповнені
  if (nickname_log && password_log) {

      if (0 === 0) {
              // Отримання значень полів вводу
              var nickname_log = $("#name_login").val();
              var password_log = $("#code_login").val();
         
              $.ajax({
                type: "POST",
                url: "/git_2",
                contentType: "application/json;charset=UTF-8", // Додати contentType
                dataType: "json", // Додати dataType
                data: JSON.stringify({
                    nickname: nickname_log,
                    password: password_log
                }),
                success: function(response) {
                    console.log(response.message);
                },
                error: function(error) {
                    console.log(error);
                }
            });
            clos()
            openModal2()
      } else {
          // Якщо пароль і підтвердження паролю не співпадають, виводимо повідомлення про помилку
          console.error("Password and confirm password do not match");
      }
  } else {
      // Якщо не всі поля заповнені, виводимо повідомлення про помилку
      console.error("All fields are required");
  }
});










$(document).ready(function() {
  $("#logaut").click(function() {
      // Отримання значень полів вводу
      var code = 0;
 
      // Відправка POST-запиту на сервер
      $.ajax({
        type: "POST",
        url: "/git_3",
        contentType: "application/json;charset=UTF-8", // Додати contentType
        dataType: "json", // Додати dataType
        data: JSON.stringify({
          code: code
        }),
        success: function(response) {
          if (response.message === 1){
            $('.idfghjb').text("You are successfully registered, wait a few seconds.");
            togglePopup()
          }
        },
        error: function(error) {
            console.log(error);
        }
      });
  });
});










togglePopup()


function togglePopup() {
  const popupContainer = document.getElementById('popup-container');
  const isOpen = popupContainer.style.display === 'block';

  if (isOpen) {
    popupContainer.style.top = '-320px'; /* Змінено на -320px (300px + 20px) */
    setTimeout(() => {
      popupContainer.style.display = 'none';
    }, 1000); // Час анімації
  } else {
    popupContainer.style.display = 'block';
    setTimeout(() => {
      popupContainer.style.top = '20px'; /* Змінено на 20px */
    }, 100);

    // Автоматичне закриття через 6 секунд
    setTimeout(() => {
      togglePopup();
    }, 5000);
  }
}
 














var iframe = document.getElementById('musx');

function reload() {
  var muxsFrame = document.getElementById('musx');
  muxsFrame.src = muxsFrame.src;
}



function changeThemeToBlack() {
  document.getElementById('theme').href = "/static/css/black.css";
  localStorage.setItem('theme', 'black');
  reload()
  clos1()
}

function changeThemeToDefault() {
  document.getElementById('theme').href = "/static/css/white.css";
  localStorage.setItem('theme', 'white');
  reload()
  clos2()
}


window.onload = function() {
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'black') {
    iframe.contentWindow.postMessage('black', '*');
      changeThemeToBlack();
  } else if (savedTheme === 'white') {
    iframe.contentWindow.postMessage('white', '*');
      changeThemeToDefault();
  }
};




//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon
//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon
//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon//fon



 function changeIframeSrc(newSrc) {
  document.getElementById('fon_chenge').src = newSrc;
  localStorage.setItem('selectedFon', newSrc);
}


window.onload = function() {
  var selectedFon = localStorage.getItem('selectedFon');
  if (selectedFon) {
      changeIframeSrc(selectedFon);
  }
};

