let active = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  active = active ? false : true;
  chrome.tabs.reload();
  if (active)
    chrome.browserAction.setIcon({ path: "./resources/allowed-logo.png" });
  else chrome.browserAction.setIcon({ path: "./resources/toggleoff-logo.png" });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (active) {
    if (request.Quiz == "True") alert("You have a quiz");
    else {
      setTimeout(() => chrome.tabs.reload(sender.tab.id), 10000);
    }
  }
});
