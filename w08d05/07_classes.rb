class Car
  attr_accessor :make, :year, :color

  def initialize make, year, color
    @make = make
    @year = year
    @color = color
  end

  def print_car
    puts "This is a #{make} from #{@year} and it's #{@color}"
  end

  # attr_reader :year
  # attr_writer :year


  # def color
  #   @color
  # end

  # def color=new_color
  #   @color = new_color
  # end
end

car = Car.new 'Toyota', '1986', 'Red'

p car.color = 'Blue'
p car

puts
p car.year
car.year = '1990'
p car

puts
p car.make
car.make = 'Ford'
p car

puts
car.print_car
