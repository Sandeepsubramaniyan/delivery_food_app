from django.db import models

# Create your models here.

class Zoggy(models.Model):
    hotel= models.CharField(max_length=50)
    location= models.CharField(max_length=100)
    description= models.CharField(max_length=300)
    
    
    def __str__(self):
        return self.hotel
    
    
class Cuisine(models.Model):
    hotel= models.CharField(max_length=50)
    zoggys= models.ManyToManyField(Zoggy) 
        
    
    def __str__(self):
        return self.hotel
    
    
