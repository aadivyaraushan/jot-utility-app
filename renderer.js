document.getElementById('closeButton').addEventListener('click', function () {
    window.close();
});

if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById('crossIcon').setAttribute('src', 'images/cross-dark-mode.png')
} else {
    document.getElementById('crossIcon').setAttribute('src', 'images/cross-light-mode.png')
}
