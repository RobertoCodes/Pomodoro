class Api::TodosController < ApplicationController

  def new
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render :show
    else
      render json: @todo.errors.full_messages
    end
  end

  
end
