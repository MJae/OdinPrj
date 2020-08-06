const getTheTitles = function(a) {
  let titles = a.map(book => `${book.title}`);
  return titles;
}

module.exports = getTheTitles;
