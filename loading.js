(function (window, document) {

    var body = document.body;

    var overflow = body.style.overflow;
    body.style.overflow = 'hidden';

    var layout = document.createElement('div');
    layout.className = 'sexy-loading';
    layout.innerHTML = '<div class="spinner"><i></i></div>';
    body.appendChild(layout);

    var finish = function () {
        layout.classList.add('sexy-loading-fadeout');
        setTimeout(function () {
            body.removeChild(layout);
        }, 2000);
        body.style.overflow = overflow;
    }

    var ready = setInterval(function () {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(ready);
            finish();
        }
    }, 10);

})(window, document);