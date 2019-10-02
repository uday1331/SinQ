chrome.runtime.onMessage.addListener(function(
  request,
  sender,
  requestResponse
) {
  if (request.Quiz == "True") alert("You have a quiz");
  else {
    chrome.tabs.reload(sender.tab.id);
  }
});
