class AddPomodorosToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :pomodoros, :integer 
  end
end
