class BooksController < ApplicationController
  def index
    # give me all of the books
    # @books = Book.all

    # give me only the books for the specified author
    # a request looks like /authors/:author_id/books
    @author = Author.find(params[:author_id])
    @books = @author.books
  end
end
