


chrome.runtime.onMessage.addListener(function (data, sender, callback) {
  //console.log(data)
  if("save link" == data.action){
    aja()
      .method('post')
      .url('https://utils.1ce.org/suggest-about-us')
      .cache(false)
      .body(data)
      .go();
  }
});


chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.executeScript(tab.id,{file:'js/findAbout.js'});
});
