async function loadExtenion() {
  const importFile = async (url) => {
    const fileUrl = chrome.runtime.getURL(url);
    const data = await import(fileUrl);
    return data;
  };

  function createScript(id, type) {
    const mainScript = document.createElement("script");
    mainScript.id = id;
    mainScript.type = type;
    return mainScript;
  }

  function injectJsScriptToBody(
    url,
    scriptId,
    scriptType = "text/javascript",
    container = "body"
  ) {
    const mainScript = createScript(scriptId, scriptType);
    mainScript.src = url;
    document[container].appendChild(mainScript);
  }

  function injectJsScriptToHead(
    text,
    scriptId,
    scriptType = "text/javascript"
  ) {
    const mainScript = createScript(scriptId, scriptType);
    mainScript.textContent = text;
    document.head.appendChild(mainScript);
  }

  let constants = await importFile("ProjectConstants/index.js");
  constants = constants.default;
  const hostPath = `${constants.host}:${constants.localPort}${constants.basePath}`;

  const globalScript = `
  import RefreshRuntime from "${hostPath}/@react-refresh"
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true
  `;

  if (window.location.hostname !== "localhost") {
    injectJsScriptToBody(
      "https://kit.fontawesome.com/770cc3540e.js",
      "app-font"
    );
    injectJsScriptToHead(globalScript, "gloabl_vite", "module");
    injectJsScriptToBody(
      `${hostPath}/@vite/client`,
      "vite_client",
      "module",
      "head"
    );
    injectJsScriptToBody(`${hostPath}/src/main.tsx`, "vite_main", "module");
  }
}

// adding delay so that fist the background worker start its job first
setTimeout(() => {
  loadExtenion();
}, 2000);
