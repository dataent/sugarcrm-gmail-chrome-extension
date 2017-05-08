/**
 * @fileoverview Request to load require content script scripts.
 *
 * There are several options to load content script. Since the script file depend on
 * user setting, we cannot hard code the file name. So dynamic injection is used.
 * It is also noted that content script itself cannot load the file having extension
 * API. We avoid using `webNavigation` because it requires browsing activity permission.
 */

(function() {

  // console.log('yathit content script running');
  var uid = 'ij' + Math.random();
  var scriptLoaded = false;
  var i = 0;
  var loadScript = function() {
    // console.log('inj ' + id + ' send ' + i);
    chrome.runtime.sendMessage({
      'req': 'inject',
      'id': uid,
      'i': ++i
    }, function(resp) {
      if (resp) {
        scriptLoaded = true;
      }
    });
    // we load more than one time, because background thread may not ready listening this
    // message. In this case the message drop. We send again after a timeout.
    setTimeout(function() {
      if (!scriptLoaded && i < 10) {
        loadScript();
      }
    }, 1000);
    // we delay enough so that we are not interfering with gmail loading
    // It has observed that, if we load in 1000 ms, somethime, gmail content
    // become blank page.
  };

  // we inject only on Main main frame and composition iframe for Live mail.
  var is_main_frame = self == top;
  if (is_main_frame) {
    loadScript();
  }

})();
