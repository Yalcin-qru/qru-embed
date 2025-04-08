(function() {
  const scripts = document.querySelectorAll('script[src*="qru-embed-loader.js"]');
  const thisScript = scripts[scripts.length - 1];
  const wallId = thisScript.getAttribute('data-wall');
  if (!wallId) {
    console.error("qru Embed: Keine wall ID gefunden (data-wall).");
    return;
  }

  const resizerScript = document.createElement('script');
  resizerScript.src = "https://19480076e0a779cef1840e3f73d5ec65.cdn.bubble.io/f1737974580607x535025922703154600/iframeResizer.min.js";

  resizerScript.onload = function() {
    const iframe = document.createElement('iframe');
    iframe.id = "qru-qontent-wall";
    iframe.src = `https://myqru.de/embed?wall=${wallId}`;
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.width = "100%";
    iframe.title = "qru-qontent-wall";
    iframe.setAttribute("allowfullscreen", "");
    iframe.style.border = "none";
    iframe.style.minHeight = "500px";
    iframe.style.visibility = "hidden"; // Erst anzeigen, wenn geladen

    thisScript.insertAdjacentElement('afterend', iframe);

    iframe.onload = function() {
      iframe.style.visibility = "visible"; // Sichtbar machen
      iFrameResize({ log: false, checkOrigin: false }, "#qru-qontent-wall");
    };
  };

  document.head.appendChild(resizerScript);
})();
