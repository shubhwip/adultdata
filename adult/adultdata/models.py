# adultdata/md.py

from django.db import models

class Adult(models.Model):
    id = models.AutoField(primary_key=True)
    age = models.IntegerField()
    workclass = models.CharField(max_length=50)
    fnlwgt = models.CharField(max_length=50)
    education = models.CharField(max_length=50)
    education_num = models.IntegerField()
    marital_status = models.CharField(max_length=50)
    occupation = models.CharField(max_length=50)
    relationship = models.CharField(max_length=50)
    race = models.CharField(max_length=50)
    sex = models.CharField(max_length=50)
    capital_gain = models.IntegerField()
    capital_loss = models.IntegerField()
    hours_per_week = models.IntegerField()
    native_country = models.CharField(max_length=50)

    class Meta:
        verbose_name = "Adult"
        verbose_name_plural = "Adults"

    def __unicode__(self):
        return '%i %i %s %s %s %i %s %s %s %s %s %i %i %i %s' % (self.id, self.age, self.workclass, self.fnlwgt, self.education, self.education_num, self.marital_status, self.occupation, self.relationship, self.race, self.sex, self.capital_gain, self.capital_loss, self.hours_per_week, self.native_country)
