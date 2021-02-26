dogs = ['Zoe', 'Jax', 'Clifford', 'Archie', 'Jorge', 'Choco']

# dogs.each do |dog|
#   puts dog
# end

# dogs.each { |dog|
#   puts dog
# }

# dog_lambda = lambda { |dog| 
#   puts dog 
#   puts "who's a good doggie"
# }

# dogs.each &dog_lambda

def method_takes_lambda &my_lambda
  puts "say something"
  my_lambda.call
end

say_something = lambda { puts "I'm giving up on you" }

method_takes_lambda &say_something 
