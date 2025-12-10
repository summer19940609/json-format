var toolMap = {
  "json-format": {
    name: "Json格式化",
    tips: "页面自动检测并格式化、手动格式化、乱码解码、排序、BigInt、编辑、下载、皮肤定制等",
    contentScriptJs: true,
    contentScriptCss: true,
    systemInstalled: true,
    menuConfig: [{
      icon: "⒥",
      text: "JSON格式化",
      contexts: ["page", "selection", "editable"]
    }]
  }
};

export default toolMap;
