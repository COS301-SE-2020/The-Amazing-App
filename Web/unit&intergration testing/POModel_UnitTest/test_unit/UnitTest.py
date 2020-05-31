import unittest
from POModel_UnitTest.pages.Login import Login
from POModel_UnitTest.pages.HomePage import HomePage
from selenium import webdriver
import time
import HtmlTestRunner
import sys
import os
from selenium.webdriver.common.by import By


sys.path.append(os.path.join(os.path.dirname(__file__), "..", ".."))


class UnitTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        path = "..\\test_unit\\chromedriver_win32\\chromedriver.exe"
        cls.driver = webdriver.Chrome(path)
        cls.driver.maximize_window()
        cls.driver.get("") #need to be filled up
        cls.login = Login(cls.driver)

 
    @classmethod
    def tearDownClass(cls):
        cls.driver.close()
        cls.driver.quit()


if __name__ == "__main__":
    unittest.main()
