from .models import Food, Zoggy
from rest_framework import serializers


class ZoggySerializer(serializers.ModelSerializer):
    class Meta:
        model = Zoggy
        fields = "__all__"
    
    
class FoodSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= Food
        fields = "__all__"    