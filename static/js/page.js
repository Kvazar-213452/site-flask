let colort1 = document.querySelector('.brrykiloiuytr1');
let colort2 = document.querySelector('.brrykiloiuytr2');
let colort3 = document.querySelector('.brrykiloiuytr3');
let colort4 = document.querySelector('.brrykiloiuytr4');
let colort5 = document.querySelector('.brrykiloiuytr5');
let colort6 = document.querySelector('.brrykiloiuytr6');
let colort7 = document.querySelector('.brrykiloiuytr7'); 
let colort8 = document.querySelector('.brrykiloiuytr8');


function histyr(name, functionName, customclass) {
  // Отримання поточного часу
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  
  // Форматування часу у вказаний формат
  var formattedTime = hours + ":" + minutes + ":" + seconds;

  // Створення рядка для вставки у div
  var newText = `<div class="yy5" onclick="${functionName}('${name}')">${name} - ${formattedTime} (${customclass})</div><br>`;

  // Отримання попереднього вмісту з localStorage
  var existingContent = localStorage.getItem('histContent') || '';

  // Зберігання нового тексту разом з попереднім вмістом
  var updatedContent = newText + existingContent;
  document.getElementById("hist").innerHTML = updatedContent;

  // Збереження вмісту в localStorage
  localStorage.setItem('histContent', updatedContent);
}

// При завантаженні сторінки вставляємо збережений вміст
document.addEventListener('DOMContentLoaded', function() {
  var savedContent = localStorage.getItem('histContent') || '';
  document.getElementById('hist').innerHTML = savedContent;
});

// Функція для переходу до iframe за іменем
function goToIframe(iframeName) {
  var iframes = document.querySelectorAll('iframe');
  for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].name === iframeName) {
          iframes[i].style.display = 'block';
      } else {
          iframes[i].style.display = 'none';
      }
  }
}

function deleteTextFromCache() {
  // Очищення вмісту div з id="hist"
  document.getElementById("hist").innerHTML = '';

  // Видалення вмісту з localStorage
  localStorage.removeItem('histContent');
  $('.idfghjb').text("History deleted successfully.");
  document.getElementById("modal13").style.display = "none";
  togglePopup()
}


window.addEventListener('load', function() {
  yhg();
});


let dataStorage = [];
let historyIndex = -1;

function rest(functionReference) {
    let data = {
        functionName: functionReference
    };

    // Перевірка, чи функція вже є в історії
    const existingIndex = dataStorage.findIndex(item => item.functionName === functionReference);
    
    if (existingIndex !== -1) {
        // Якщо є, то просто оновлюємо індекс
        historyIndex = existingIndex;
    } else {
        // Якщо немає, додаємо новий запис
        dataStorage.push(data);
        historyIndex = dataStorage.length - 1;
    }
}

function goBack() {
    if (historyIndex > 0) {
        historyIndex--;
        let targetData = dataStorage[historyIndex];
        if (typeof targetData.functionName === "function") {
            targetData.functionName();
        }
    }
}

function goForward() {
    if (historyIndex < dataStorage.length - 1) {
        historyIndex++;
        let targetData = dataStorage[historyIndex];
        if (typeof targetData.functionName === "function") {
            targetData.functionName();
        }
    }
}



window.addEventListener('message', function(event) {
  if (event.data === 'game') {
    snake()
  }

  if (event.data === 'game1') {
    races()
  }

  if (event.data === 'game2') {
    rain()
  }

  if (event.data === 'game3') {
    ball()
  }

  if (event.data === 'game4') {
    tetris()
  }

  //all
  //all
  //all
  //all
  //all
  //all
  //all

  if (event.data === 'all') {
    tetris()
  }

  if (event.data === 'all1') {
    ninja_Cube()
  }

  if (event.data === 'all2') {
    tic_tac_toe()
  }

  if (event.data === 'all3') {
    platforms()
  }

  if (event.data === 'all4') {
    hare()
  }

  if (event.data === 'all5') {
    jump()
  }

  if (event.data === 'all6') {
    сhess()
  }

  if (event.data === 'all7') {
    stone_scissors_paper()
  }

  if (event.data === 'all8') {
    tetris_2()
  }

  if (event.data === 'all9') {
    targets()
  }

  if (event.data === 'all10') {
    tenis()
  }

  if (event.data === 'all11') {
    ninja()
  }

  if (event.data === 'all12') {
    shooting_range()
  }

  if (event.data === 'all13') {
    g2042()
  }
});



//main
//main
//main
//main
//main

function yhg() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'music';
  iframe.id = 'musx';
  iframe.src = "/music";  
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('music', 'yhg', '123456789');
  rest(yhg);  

  colort1.id = 'colkg';
  colort2.id = 'colorhh';
  colort3.id = 'colorhh';
  colort4.id = 'colorhh';
  colort5.id = 'colorhh';
  colort6.id = 'colorhh';
  colort7.id = 'colorhh';
  colort8.id = 'colorhh';
}



function yhg1() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'game';
  iframe.id = 'musx';
  iframe.src = '/game';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('game', 'yhg1', '213555678');
  rest(yhg1);  

  
  colort2.id = 'colkg';
  colort1.id = 'colorhh';
  colort3.id = 'colorhh';
  colort4.id = 'colorhh';
  colort5.id = 'colorhh';
  colort6.id = 'colorhh';
  colort7.id = 'colorhh';
  colort8.id = 'colorhh';
}

function yhg2() {
  // Видаляємо всі інші <iframe> елементи
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'app';
  iframe.id = 'musx';
  iframe.src = '/app/';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('app', 'yhg2', '654332143');
  rest(yhg2);  

  
  colort7.id = 'colkg';
  colort2.id = 'colorhh';
  colort3.id = 'colorhh';
  colort4.id = 'colorhh';
  colort5.id = 'colorhh';
  colort6.id = 'colorhh';
  colort1.id = 'colorhh';
  colort8.id = 'colorhh';
}

function yhg3() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'short';
  iframe.id = 'musx';
  iframe.src = '/short';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('short', 'yhg3', '067856782');
  rest(yhg3);  

  
  colort3.id = 'colkg';
  colort2.id = 'colorhh';
  colort1.id = 'colorhh';
  colort4.id = 'colorhh';
  colort5.id = 'colorhh';
  colort6.id = 'colorhh';
  colort7.id = 'colorhh';
  colort8.id = 'colorhh';
}

function yhg4() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'favorite_playlist';
  iframe.id = 'musx';
  iframe.src = '/playlist/';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('favorite_playlist', 'yhg4', '455456667');
  rest(yhg4);  

  
  colort6.id = 'colkg';
  colort2.id = 'colorhh';
  colort3.id = 'colorhh';
  colort4.id = 'colorhh';
  colort5.id = 'colorhh';
  colort1.id = 'colorhh';
  colort7.id = 'colorhh';
  colort8.id = 'colorhh';
}

function yhg5() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'broadcasting';
  iframe.id = 'musx';
  iframe.src = '/broadcasting/';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('broadcasting', 'yhg5', '535665368');
  rest(yhg5);  

  
  colort4.id = 'colkg';
  colort2.id = 'colorhh';
  colort3.id = 'colorhh';
  colort1.id = 'colorhh';
  colort5.id = 'colorhh';
  colort6.id = 'colorhh';
  colort7.id = 'colorhh';
  colort8.id = 'colorhh';
}

function yhg7() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'Favorite_music';
  iframe.id = 'musx';
  iframe.src = 'dist/Favorite_music.html';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('Favorite_music', 'yhg7', '222222222');
  rest(yhg7);  

  
  colort5.id = 'colkg';
  colort2.id = 'colorhh';
  colort3.id = 'colorhh';
  colort4.id = 'colorhh';
  colort1.id = 'colorhh';
  colort6.id = 'colorhh';
  colort7.id = 'colorhh';
  colort8.id = 'colorhh';
}

function yhg6() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'Role';
  iframe.id = 'musx';
  iframe.src = '/role/';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('Role', 'yhg6', '111111111');
  rest(yhg6);  

  
  colort8.id = 'colkg';
  colort2.id = 'colorhh';
  colort3.id = 'colorhh';
  colort4.id = 'colorhh';
  colort1.id = 'colorhh';
  colort5.id = 'colorhh';
  colort7.id = 'colorhh';
  colort6.id = 'colorhh';
}


//game
//game
//game
//game
//game
//game

function snake() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'g:Snake';
  iframe.id = 'musx';
  iframe.src = '/snake';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('g:Snake', 'snake', '452324344331');
  rest(snake);  
}

function races() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'g:Races';
  iframe.id = 'musx';
  iframe.src = '/races';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('g:Races', 'races', '452324344331');
  rest(races);  
}

function rain() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'g:Rain';
  iframe.id = 'musx';
  iframe.src = '/rain';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('g:Rain', 'rain', '452324344331');
  rest(rain);  
}

function tennis() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'g:Tennis';
  iframe.id = 'musx';
  iframe.src = '/tennis';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('g:Tennis', 'tennis', '452324344331');
  rest(tennis);  
}

function tetris() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'g:Tetris';
  iframe.id = 'musx';
  iframe.src = '/tetris';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('g:Tetris', 'tetris', '452324344331');
  rest(tetris);  
}


//game_all
//game_all
//game_all
//game_all
//game_all
//game_all
//game_all


function ball() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Ball';
  iframe.id = 'musx';
  iframe.src = '/ball';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Ball', 'ball', '452324344331');
  rest(ball);  
}

function ninja_Cube() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Ninja_Cube';
  iframe.id = 'musx';
  iframe.src = '/ninja_Cube';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Ninja_Cube', 'ninja_Cube', '452324344331');
  rest(ninja_Cube);  
}

function tic_tac_toe() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Tic-tac-toe';
  iframe.id = 'musx';
  iframe.src = '/tic_tac_toe';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Tic-tac-toe', 'tic_tac_toe', '452324344331');
  rest(tic_tac_toe);  
}

function platforms() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Platforms';
  iframe.id = 'musx';
  iframe.src = '/platforms';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Platforms', 'platforms', '452324344331');
  rest(platforms);  
}

function hare() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Hare';
  iframe.id = 'musx';
  iframe.src = '/hare';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Hare', 'hare', '452324344331');
  rest(hare);  
}

function stone_scissors_paper() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Stone_scissors_paper';
  iframe.id = 'musx';
  iframe.src = '/stone_scissors_paper';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Stone_scissors_paper', 'stone_scissors_paper', '452324344331');
  rest(stone_scissors_paper);  
}

function tetris_2() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Tetris_2';
  iframe.id = 'musx';
  iframe.src = '/tetris_2';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Tetris_2', 'tetris_2', '452324344331');
  rest(tetris_2);  
}

function targets() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Targets';
  iframe.id = 'musx';
  iframe.src = '/targets';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Targets', 'targets', '452324344331');
  rest(targets);  
}

function tenis() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Tenis';
  iframe.id = 'musx';
  iframe.src = '/tenis';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Tenis', 'tenis', '452324344331');
  rest(tenis);  
}

function jump() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Jump';
  iframe.id = 'musx';
  iframe.src = '/jump';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Jump', 'jump', '452324344331');
  rest(jump);  
}

function chess() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Chess';
  iframe.id = 'musx';
  iframe.src = '/chess';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Chess', 'chess', '452324344331');
  rest(chess);  
}

function ninja() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Ninja';
  iframe.id = 'musx';
  iframe.src = '/ninja';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Ninja', 'ninja', '452324344331');
  rest(ninja);  
}

function shooting_range() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:Shooting_range';
  iframe.id = 'musx';
  iframe.src = 'http://127.0.0.1:2000/game';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:Shooting_range', 'shooting_range', '452324344331');
  rest(shooting_range);  
}

function g2042() {
  var iframes = document.querySelectorAll('main.main iframe');
  for (var i = 0; i < iframes.length; i++) {
      iframes[i].parentNode.removeChild(iframes[i]);
  }

  var iframe = document.createElement('iframe');
  iframe.name = 'a:2042';
  iframe.id = 'musx';
  iframe.src = 'http://127.0.0.1:2000/game1';
  iframe.frameBorder = '0';
  iframe.style.backgroundColor = 'transparent';

  var mainElement = document.querySelector('main.main');
  mainElement.appendChild(iframe);
  histyr('a:2042', 'g2042', '452324344331');
  rest(g2042);  
}