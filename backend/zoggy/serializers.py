from .models import Cuisine, Zoggy
from rest_framework import serializers


class ZoggySerializer(serializers.ModelSerializer):
    class Meta:
        model = Zoggy
        fields = "__all__"
    
    
class CuisineSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Cuisine
        fields = "__all__"    