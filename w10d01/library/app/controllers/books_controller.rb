class BooksController < ApplicationController
  def index
    # give me all of the books
    # @books = Book.all

    # give me only the books for the specified author
    @author = Author.find(params[:author_id])
    @books = @author.books
  end
  # def show
  #   # give me all of the books
  #   # @books = Book.all

  #   # give me only the books for the specified author
  #   @author = Author.find(params[:author_id])
  #   @books = @author.books
  # end
end
