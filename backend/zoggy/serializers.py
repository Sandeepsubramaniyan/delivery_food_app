from .models import Zoggy
from rest_framework import serializers


class ZoggySerializer(serializers.ModelSerializer):
    class Meta:
        model = Zoggy
        fields = "__all__"
    
    
    