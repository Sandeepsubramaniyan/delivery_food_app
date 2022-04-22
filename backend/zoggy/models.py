from django.db import models

# Create your models here.

class Zoggy(models.Model):
    hotel= models.CharField(max_length=50)
    location= models.CharField(max_length=100)
    description= models.CharField(max_length=300)
    
    
    def __str__(self):
        return self.hotel
    
    
class Food(models.Model):
    cuisine= models.CharField(max_length=50)
    hotel= models.ManyToManyField("Zoggy") 
        
    
    def __str__(self):
        return self.cuisine
    
    
