from django.db import models

# Create your models here.

class Zoggy(models.Model):
    id= models.IntegerField
    hotel= models.CharField(max_length=50)
    cuisine= models.CharField(max_length=100)
    location= models.CharField(max_length=100)
    description= models.CharField(max_length=300)
    
    
    def _str_(self):
        return self.hotel
