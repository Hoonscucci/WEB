from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from newspaper import Article
from konlpy.tag import Okt
from collections import Counter, OrderedDict
import pandas as pd

URL_BEFORE_KEYWORD = "https://search.naver.com/search.naver?where=news&sm=tab_pge&query="
URL_BEFORE_PAGE_NUM = ("&sort=0&photo=0&field=0&pd=0&ds=&de=&cluster_rank=26&mynews=0&office_type=0"
                       "&office_section_code=0&news_office_checked=&nso=so:r,p:all,a:all&start=")

totalDataList = []
key_word = input("검색어를 입력하세요: ")
page_range = int(input("조회한 페이지 수를 입력하세요: "))
driver = webdriver.Chrome()
url = "https://www.naver.com"
driver.get(url)
time.sleep(2)

search = driver.find_element(By.CLASS_NAME, 'search_input')
search.send_keys(key_word)
driver.find_elements(By.CLASS_NAME, 'ico_btn_search')[0].click()
time.sleep(2)

driver.find_element(By.LINK_TEXT, "뉴스").click()
time.sleep(2)

for page in range(1,page_range+1):
    driver.find_element(By.XPATH, f'//*[@id="main_pack"]/div[2]/div/div/a[{page}]').click()
    news = driver.find_elements(By.CLASS_NAME, "news_tit")
    for i in news:

        news_href = i.get_attribute("href")

        article = Article(news_href, language="ko")

        try:
            article.download()
            article.parse()
        except:
            continue

        news_title = article.title
        news_content = article.text.strip().replace('\n', "")

        engine = Okt()
        all_nonus = engine.nouns(news_content)
        nouns = [n for n in all_nonus if len(n) > 1]

        count = Counter(nouns)
        by_num = OrderedDict(sorted(count.items(), key=lambda t: t[1], reverse=True))

        word_5 = ",".join(list(by_num)[:5])

        dataList = [str(news_title), str(news_content), str(news_href), str(word_5)]
        totalDataList.append((dataList))

df = pd.DataFrame(totalDataList, columns = ["제목","내용","기사 URL","단어 5가지" ])
print(df)
df.to_csv("selenium_naver_news.csv", encoding="utf-8", index=False)
driver.close()


