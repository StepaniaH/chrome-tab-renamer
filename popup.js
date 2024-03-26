document.getElementById("renameBtn").addEventListener("click", function () {
  var newTabName = document.getElementById("tabName").value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.title = "' + newTabName + '";',
    });
  });
});
