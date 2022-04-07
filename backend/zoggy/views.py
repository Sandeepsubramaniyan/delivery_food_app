
from rest_framework.viewsets import ModelViewSet
from .serializers import ZoggySerializer
from .models import Zoggy

# Create your views here.

class ZoggyViewSet(ModelViewSet):
    
    serializer_class = ZoggySerializer
    queryset = Zoggy.objects.all()
    