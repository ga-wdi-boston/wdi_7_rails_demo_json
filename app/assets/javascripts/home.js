$(document).ready(function() {

  $.ajax({
    url: '/books',
    method: 'get' // optional, defaults to GET
  })
  .done(TodoApp.displayBooks);
});

var TodoApp = TodoApp || {};

TodoApp.displayBooks = function(result) {
  result.forEach(function(book) {
    var book_div = $('<div class=\'book\'>').text(book.title);
    var author = $('<div class=\'author\'>').text(book.author.name);
    book_div.append(author);
    $('#books').append(book_div);
  });
}
