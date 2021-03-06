# -*- coding: utf-8 -*-
"""login_page_scrapper.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/15Qmh4kuXOPwxFKhB0SPP3cOsQQY_t0QQ
"""

from requests import get
from bs4 import BeautifulSoup
import re

def parse_html(html):
    # print(html)
    soup = BeautifulSoup(html,'html.parser')
    # print(html)
    # soup = str(soup)
    user_id = soup.find_all('input', attrs = {'type' : 'text'})
    print(user_id)

    password = soup.find_all('input', attrs = {'type' : 'password'})
    print(password)

def find_fieldnames(url):
    usr_agent = {
        'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
        'Chrome/90.0.4430.93 Safari/537.36'
    }
    response = get(url,header = usr_agent)
    # response.raise_for_status()
    parse_html(response.text)

input_url = 'https://infinity.icicibank.com/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ICI&ITM=nli_personalb_personal_login_btn&_ga=2.5978997.731178718.1620117534-1744002012.1566216005&_gl=1*qnk9qo*_ga*MTc0NDAwMjAxMi4xNTY2MjE2MDA1*_ga_SKB78GHTFV*MTYyMDExNzUzMy4xLjEuMTYyMDExNzU0Ny40Ng'
# input_url = 'https://services.gst.gov.in/services/login'
# input_url = 'https://www.facebook.com/'
find_fieldnames(input_url)