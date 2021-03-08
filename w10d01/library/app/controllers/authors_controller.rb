class AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render json: @authors
  end

  # def show
  #   @authors = Author.all
  # end
end
