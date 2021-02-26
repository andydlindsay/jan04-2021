i = 0
# loop do
#   i += 1
#   puts "hello there #{i}"

#   # if i > 10
#   #   break
#   # end

#   break if i > 10
# end

# while i < 5 do
#   i += 1
#   puts "hello #{i}"
# end

# until i > 5 do
#   i += 1
#   puts "hello #{i}"
# end

names = ['Alice', 'Bob', 'Carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

# names.each { |name|
#   puts "hello there #{name}"
# }

# for name in names do
#   puts name
# end

nums = [7, 6, 2, 8, 10]

# filter
# selected = nums.select do |num|
#   num > 4
# end
# puts selected
# p selected

# (50..100).step(5).each do |num|
#   if num % 3 == 0 && num % 5 == 0
#     puts "fizzbuzz"
#   elsif num % 3 == 0
#     puts "fizz"
#   elsif num % 5 == 0
#     puts "buzz"
#   else
#     puts num
#   end
# end

7.times do |num|
  puts "hello world"
end
