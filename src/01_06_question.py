import pyautogui
import time

array = []
for i in range(11):
    j = 0
    string = ""
    while j < i:
        j += 1
        string += f"+|x+{j}|"
    string = string[1:]
    array.append(string)
print(array)

time.sleep(3)
for item in array:
    pyautogui.write(str(item), interval=0)
    pyautogui.press("enter")