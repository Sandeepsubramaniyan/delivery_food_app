
from rest_framework.views import APIView
from .serializers import ZoggySerializer
from .models import Zoggy
from rest_framework.response import Response


# Create your views here.

class ZoggyViewSet(APIView):
                
        def get(self,request):

                
            queryset = Zoggy.objects.all()
            serializer_class = ZoggySerializer(queryset,many=True)
            return Response(serializer_class.data)
        
    
        
    