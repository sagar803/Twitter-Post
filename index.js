// Get the selected text
  function getSelectedText() {
    var selectedText = "";
    if (window.getSelection) {
      selectedText = window.getSelection().toString();
    }
    return selectedText;
  }

  // Show the selected text menu
  function showSelectedTextMenu(x, y) {
    var menu = document.querySelector(".selected-text-menu");
    menu.style.display = "block";
    menu.style.left = x + "px";
    menu.style.top = y + "px";
  }

  // Hide the selected text menu
  function hideSelectedTextMenu() {
    var menu = document.querySelector(".selected-text-menu");
    menu.style.display = "none";
  }

  // Share on Twitter
  function shareOnTwitter() {
    var text = getSelectedText();
    if (text.length > 0) {
      var tweetUrl =
        "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
      window.open(tweetUrl);
    }
    hideSelectedTextMenu();
  }

  // Attach event listeners
var article = document.querySelector("article");
article.addEventListener("pointerup", handleUserInput);
article.addEventListener("touchend", handleUserInput);

function handleUserInput(event) {
  var selectedText = getSelectedText();
  if (selectedText.length > 0) {
    var x = event.pageX || event.changedTouches[0].pageX;
    var y = event.pageY || event.changedTouches[0].pageY;
    showSelectedTextMenu(x, y);
  }
}

  var shareTwitterButton = document.querySelector(".share-twitter-button");
  shareTwitterButton.addEventListener("click", function (event) {
    shareOnTwitter();
  });

  var exit = document.querySelector(".exit-menu");
  exit.addEventListener("click", function(event){
    hideSelectedTextMenu();
  });