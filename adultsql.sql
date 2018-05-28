use adult;

create table adultdata_adult (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
age INT,
workclass VARCHAR(50),
fnlwgt VARCHAR(50),
education VARCHAR(50),
education_num INT,
marital_status VARCHAR(50),
occupation VARCHAR(50),
relationship VARCHAR(50),
race VARCHAR(50),
sex VARCHAR(50),
capital_gain INT,
capital_loss INT,
hours_per_week INT,
native_country VARCHAR(50),
list_attributes VARCHAR(50)
);


LOAD DATA INFILE '/Users/appperfect/Documents/Development/adult/adultdata/adult.csv'
INTO TABLE adultdata_adult
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
