async function loadBackgroundJs() {
  const importFile = async (url) => {
    const fileUrl = chrome.runtime.getURL(url);
    const data = await import(fileUrl);
    return data;
  };

  let constants = await importFile("ProjectConstants/index.js");
  constants = constants.default;

  function logURL(e) {
    console.log("==url log==", e.url);
    let found = false;

    e.responseHeaders.forEach((header) => {
      if (header.name.toLowerCase() === "content-security-policy") {
        found = true;
        header.value =
          "default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';";
      }
    });

    if (!found) {
      e.responseHeaders.push({
        name: "content-security-policy",
        value:
          "default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';",
      });
    }

    e.responseHeaders.push({
      name: "Access-Control-Allow-Origin",
      value: "*",
    });

    return {
      responseHeaders: e.responseHeaders,
    };
  }

  chrome.webRequest.onHeadersReceived.addListener(
    logURL,
    {
      urls: ["<all_urls>"],
      // types: ["main_frame", "media", "xmlhttprequest"],
    },
    ["blocking", "responseHeaders"]
  );

  function redirect(requestDetails) {
    if (requestDetails.url.includes(constants.basePath)) {
      const urls = requestDetails.url.split(constants.basePath);
      console.log(`Redirecting: ${requestDetails.url}`, urls);

      return {
        redirectUrl: `${constants.host}:${constants.localPort}${constants.basePath}${urls[1]}`,
      };
    }
  }

  chrome.webRequest.onBeforeRequest.addListener(
    redirect,
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
}

loadBackgroundJs();
