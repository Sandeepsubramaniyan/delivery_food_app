
from rest_framework.viewsets import ModelViewSet
from .serializers import ZoggySerializer
from .models import Zoggy
from rest_framework.response import Response

# Create your views here.

class ZoggyViewSet(ModelViewSet):
    
    def get(self,request):
        serializer_class = ZoggySerializer
        queryset = Zoggy.objects.all()
    
        return Response (serializer_class.data)
    