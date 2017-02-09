const remote = require('electron').remote;

function init() {
  
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    init();
  }
};
