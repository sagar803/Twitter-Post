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
    console.log(menu.style.left);
    console.log(menu.style.top);
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
  article.addEventListener("mouseup", function (event) {
    var selectedText = getSelectedText();
    if (selectedText.length > 0) {
      var x = event.pageX;
      var y = event.pageY;
      showSelectedTextMenu(x, y);
    //   document.querySelector(".selected-text-menu").style.display = "block";
    }
  });

  var shareTwitterButton = document.querySelector(".share-twitter-button");
  shareTwitterButton.addEventListener("click", function (event) {
    shareOnTwitter();
  });

//   Hide the selected text menu when clicking outside of it
//   window.addEventListener("mouseup", function (event) {
//     var menu = document.querySelector(".selected-text-menu");
//     if (event.target != menu && event.target.parentNode != menu) {
//       hideSelectedTextMenu();
//     }
//   });