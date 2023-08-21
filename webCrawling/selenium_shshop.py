from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://shshop.testy.kr/")
time.sleep(4)

# driver.find_element(By.LINK_TEXT, value="패션의류")
driver.get("http://shshop.testy.kr/shop/goods_list.php?cate_id=1")
time.sleep(2)
categortSearch = driver.find_element(By.CSS_SELECTOR, value="input.input_box150")
time.sleep(2)
categortSearch.send_keys("자켓")
time.sleep(2)
driver.find_elements(By.CLASS_NAME, value="button_small")[1].click()
time.sleep(5)


# searchElem = driver.find_element(By.NAME, value="sch_text")
# searchElem.send_keys("티셔츠")
# searchElem.send_keys(Keys.RETURN)
# time.sleep(4)

# searchList = driver.find_elements(By.CLASS_NAME, value="goods_name")
# for i in searchList:
#     print(i.text)
driver.quit()


