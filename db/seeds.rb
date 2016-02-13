
User.destroy_all

Todo.destroy_all

hipster = User.create!(username: "hipster01", password: "duuuude")

t1 = Todo.create!(name: "Write the Great American Novel", pomodoros: 8, user_id: hipster.id)

t2 = Todo.create!(name: "Brainstorm quinoa salad ideas", pomodoros: 6, user_id: hipster.id)

t3 = Todo.create!(name: "Fix unicycle", pomodoros: 2, user_id: hipster.id)

t4 = Todo.create!(name: "Sign up for weekly juice sampler", pomodoros: 1, user_id: hipster.id)

t5 = Todo.create!(name: "Get headshots developed", pomodoros: 4, user_id: hipster.id)

t6 = Todo.create!(name: "Find an apartment in Williamsburg", pomodoros: 3, user_id: hipster.id)
