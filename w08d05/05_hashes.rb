# key/value pair

user = {
  'username' => 'jstamos',
  'password' => '1234',
  'logged_in' => false
}

my_key = 'username'
puts user[my_key]

# user = {
#   :username => 'bob',
#   :password => 'abcd'
# }

# puts user

user = {
  username: 'carol',
  password: '1234'
}

puts user[:username]

my_key = 'password'

puts user[my_key.to_sym]

puts :username.to_s