# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.destroy_all

t1 = Todo.create!(name: "Finish outline.", pomodoros: 3)

t2 = Todo.create!(name: "Write novel.", pomodoros: 6)

t3 = Todo.create!(name: "Publish website.", pomodoros: 4)

t4 = Todo.create!(name: "Resolve global warming.", pomodoros: 8)
