
document.getElementById('closeButton').addEventListener('click', function () {
    store.set('inputData', document.getElementById('inputBox').value);
    window.close();
});

window.onload = function () {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('crossIcon').setAttribute('src', 'images/cross-dark-mode.png');
    } else {
        document.getElementById('crossIcon').setAttribute('src', 'images/cross-light-mode.png');
    }
    const textarea = document.getElementById('inputBox');
    textarea.value = store.get('inputData') === undefined ? '' : store.get('inputData');
}