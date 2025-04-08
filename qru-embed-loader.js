(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const scripts = document.querySelectorAll('script[src*="qru-embed-loader.js"]');
    const thisScript = scripts[scripts.length - 1];
    const wallId = thisScript.getAttribute('data-wall');
    if (!wallId) {
      console.error("qru Embed: Keine wall ID gefunden (data-wall).");
      return;
    }

    // Iframe erzeugen
    const iframe = document.createElement('iframe');
    iframe.id = "qru-qontent-wall";
    iframe.src = `https://embed.myqru.de/?wall=${wallId}`;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.width = "100%";
    iframe.title = "qru-qontent-wall";
    iframe.setAttribute("allowfullscreen", "");             // Fullscreen erlauben
    iframe.setAttribute("allow", "fullscreen");             // moderne Browser
    iframe.style.border = "none";
    iframe.style.minHeight = "500px";
    iframe.style.visibility = "hidden";                     // erst sichtbar nach load

    thisScript.insertAdjacentElement('afterend', iframe);

    // iframeResizer laden
    const resizerScript = document.createElement('script');
    resizerScript.src = "https://19480076e0a779cef1840e3f73d5ec65.cdn.bubble.io/f1737974580607x535025922703154600/iframeResizer.min.js";

    resizerScript.onload = function () {
      iFrameResize({
        log: false,
        checkOrigin: false,
        heightCalculationMethod: 'bodyScroll',
        warningTimeout: 0,
        onInit: function (iframeEl) {
          // Fullscreen-Attribute sicherheitshalber nochmal setzen
          iframeEl.setAttribute("allowfullscreen", "");
          iframeEl.setAttribute("allow", "fullscreen");
          iframeEl.style.visibility = "visible";
        }
      }, "#qru-qontent-wall");
    };

    document.head.appendChild(resizerScript);
  });
})();
