// 简化版background.js - 仅支持JSON格式化功能

// 监听消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "fh-dynamic-any-thing") {
    switch (request.thing) {
      case "request-jsonformat-options":
        chrome.storage.local.get(request.params).then((result) => {
          Object.keys(result).forEach((key) => {
            if (["MAX_JSON_KEYS_NUMBER", "JSON_FORMAT_THEME"].includes(key)) {
              result[key] = parseInt(result[key]);
            } else {
              result[key] = "" + result[key] != "false";
            }
          });
          sendResponse(result);
        });
        return true;
      case "save-jsonformat-options":
        chrome.storage.local.set(request.params).then(() => {
          sendResponse();
        });
        return true;
      case "toggle-jsonformat-options":
        chrome.storage.local.get("JSON_TOOL_BAR_ALWAYS_SHOW").then((data) => {
          const current = data.JSON_TOOL_BAR_ALWAYS_SHOW !== false;
          chrome.storage.local.set({ JSON_TOOL_BAR_ALWAYS_SHOW: !current }).then(() => {
            sendResponse(!current);
          });
        });
        return true;
    }
  }
  return false;
});

// 安装时打开JSON格式化页面
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.tabs.create({ url: "/json-format/index.html" });
  }
});
