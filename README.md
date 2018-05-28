# AdultData

AdultData is display of adult data set

# Technology Stack

  - Django
  - AngularJs
  - Mysql

# Prerequsites
  - Django
  - Python

# Run
  - Clone Project
  - git clone https://github.com/shubhwip/adult.git
  - Setup Virtual Environment
  cd adult
  virtualenv -p python3 env && source env/bin/activate

  - pip3 install django
  - pip3 install mysqlclient
  - pip3 install djangorestframework
  - update Settings.py with mysql details
  - create database adult
  - python3 manage.py migrate
  - python3 manage.py createsuperuser
  - Import Mysql Data
        - There is adult.csv present in adultdata app which is cleaned.
        - There is adultimport.sql, you can execute sql script to create database, import data
        - Note - Open and Update first adultimport.sql with absolute path of adult.csv

#References
- https://www.codingforentrepreneurs.com/blog/install-django-on-mac-or-linux/
- http://fernandorodrigues.pro/creating-a-rest-apiwebservice-with-django-rest-framework-and-mysql-using-python-3/
