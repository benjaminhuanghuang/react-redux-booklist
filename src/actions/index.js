function selectBook(book) {
  // selectBook is an action creator, it returns an action.
  return {
    type: "BOOK_SELECTED",
    payload: book,
  }
}