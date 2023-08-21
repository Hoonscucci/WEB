from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time

driver = webdriver.Chrome()
driver.get("https://map.naver.com/v5/search/전국 오토 캠핑장")
time.sleep()

siteName = driver.find_element(By.XPATH, '//*[@id="_pcmap_list_scroll_container"]/ul/li[1]/div[1]/a[1]')
print(siteName)
time.sleep(2)


# 전국 오토캠핑장에서 리스트를 끝까지 다 늘려서
# 1p 가격 추출하고
# 2p 로 넘어가서 반복
# 5p 눌러야 6p가 보임
# 그럼 > 버튼을 눌러서 반복되게 실행

driver.close()