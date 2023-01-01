function logURL(e) {
  console.log("==url log==", e.url);
  e.responseHeaders.push({
    name: "content-security-policy",
    value:
      "default-src *  data: blob: filesystem: about: ws: wss: 'unsafe-inline' 'unsafe-eval'; script-src * data: blob: 'unsafe-inline' 'unsafe-eval'; connect-src * data: blob: 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; frame-src * data: blob: ; style-src * data: blob: 'unsafe-inline'; font-src * data: blob: 'unsafe-inline';",
  });

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
  if (requestDetails.url.includes("toodle")) {
    const urls = requestDetails.url.split("/toodle");
    console.log(`Redirecting: ${requestDetails.url}`, urls);

    return {
      redirectUrl: `http://localhost:5173/toodle${urls[1]}`,
    };
  }
}

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: ["<all_urls>"] },
  ["blocking"]
);
