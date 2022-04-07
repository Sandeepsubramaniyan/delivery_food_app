from unittest.util import _MAX_LENGTH
from rest_framework import serializers


class ZoggySerializer(serializers.Serializer):
    
    id= serializers.IntegerField
    hotel= serializers.CharField(max_length=50)
    cuisine= serializers.CharField(max_length=100)
    location=serializers.CharField(max_length=100)
    