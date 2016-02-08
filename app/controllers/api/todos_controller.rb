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

  def index
    @todos = Todo.all
    #eventually will only be current users todos: current_user.todos
    render :index
  end

  def show
    @todo = Todo.find(params[:id])
    render :show
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render :show
    else
      render json: @todo.errors.full_messages
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      render :show
    else
      render json: @todo.errors.full_messages
    end
  end

  def edit
  end

end
