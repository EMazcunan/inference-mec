(function() {
  var codes = document.querySelectorAll('.ex');
  var code, i, parent, container, title;
  for (i = 0; i < codes.length; i++) {
    code = codes[i];
    parent = code.parentNode;
    // create container
    container = document.createElement('div');
    container.className = "ex-container";
    // create title
    title = document.createElement('div');
    title.className = "ex-title";
    title.innerText = "Problema " + code.getAttribute("number");
    // add container to parent
    // and title to container
    parent.insertBefore(container, code);
    container.appendChild(title);
  }
})();
