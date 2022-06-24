//Load book from disk

function loadBook(fileName, displayName) {
  let currentBook = "";
  let url = "books/" + fileName;

  //reset UI
  document.getElementById("fileName").innerHTML = displayName;
  document.getElementById("searchstat").innerHTML = "";
  document.getElementById("keyword").value = "";

  //create server to load book
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      currentBook = xhr.responseText;

      currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, "<br>");
      document.getElementById("fileContent").innerHTML = currentBook;

      //remove line breaks

      var elmnt = document.getElementById("fileContent");
      elmnt.scrollTop = 0;
    }
  };
}
