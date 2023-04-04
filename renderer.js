

document.getElementById('closeButton').addEventListener('click', function () {
    const text = document.getElementById('inputBox').value;
    console.log(text);
    store.set('inputData', text);
    console.log(store.get('inputData'));
    window.close();
});

window.onload = function () {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementById('crossIcon').setAttribute('src', 'images/cross-dark-mode.png');
    } else {
        document.getElementById('crossIcon').setAttribute('src', 'images/cross-light-mode.png');
    }
    document.getElementById('inputBox').value = store.get('inputData') === undefined ? '' : store.get('inputData')
}