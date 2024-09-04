window.addEventListener('message', function(event) {
    if (event.data === 'black') {
        changeThemeToBlack()
    }

    if (event.data === 'white') {
        changeThemeToDefault()
    }
});

function changeThemeToBlack() {
    document.getElementById('theme').href = "/static/css/black.css";
}

function changeThemeToDefault() {
    document.getElementById('theme').href = "/static/css/white.css";
}

var savedTheme = localStorage.getItem('theme');
if (savedTheme === 'black') {
    changeThemeToBlack();
    
} else if (savedTheme === 'white') {
    changeThemeToDefault();
}
