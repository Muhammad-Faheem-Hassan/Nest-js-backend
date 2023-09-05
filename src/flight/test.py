test = 1

def my_function(test):
  global test
  test = test + 1
my_function(test)
print(test)