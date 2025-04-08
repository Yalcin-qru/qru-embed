(function() {
  const scripts = document.querySelectorAll('script[src*="qru-embed-loader.js"]');
  const thisScript = scripts[scripts.length - 1];
  const wallId = thisScript.getAttribute('data-wall');
  if (!wallId) {
    console.error("qru Embed: Keine wall ID gefunden (data-wall).");
    return;
  }

  const iframe = document.createElement('iframe');
  iframe.id = "qru-qontent-wall";
  iframe.src = `https://embed.myqru.de/?wall=${wallId}`;
  iframe.frameBorder = "0";
  iframe.scrolling = "no";
  iframe.width = "100%";
  iframe.title = "qru-qontent-wall";
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "fullscreen"); 
  iframe.style.border = "none";
  iframe.style.minHeight = "500px";
  iframe.style.visibility = "visible"; // direkt sichtbar

  thisScript.insertAdjacentElement('afterend', iframe);
})();
