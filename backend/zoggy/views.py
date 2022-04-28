from rest_framework.views import APIView
from .serializers import CuisineSerializer, ZoggySerializer
from .models import Zoggy , Cuisine
from rest_framework.response import Response
from django.shortcuts import get_object_or_404




# Create your views here.

class ZoggyView(APIView):
        
        def get(self,request):
                displays = Zoggy.objects.all()
                serializer_class = ZoggySerializer(displays,many=True)            
                return Response(serializer_class.data)
        
          
        
class Individual(APIView):
        
        def get(self, request, pk):
                data = get_object_or_404(Zoggy, pk=pk)
                serializer = ZoggySerializer(data)
                return Response(serializer.data)
        


                
class CuisineView(APIView):
        
        def get(self,request,item):
                cuisine_filter = get_object_or_404(Cuisine,cuisines= item)
                hotels = cuisine_filter.hotels.all()
                serializer = ZoggySerializer(hotels, many=True)
                return Response(serializer.data)
    
    # def post(self,request,id=None):
        
    #     try:
    #         Hotels=Zoggy.objects.get(id_Hotel=id)
    #     except Zoggy.DoesNotExist:
    #         raise NotFound('No id found')
        
        

        
    
        
    