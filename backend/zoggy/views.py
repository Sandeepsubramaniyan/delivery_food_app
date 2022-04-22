from rest_framework.views import APIView
from .serializers import FoodSerializer, ZoggySerializer
from .models import Zoggy , Food
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
        


                
class FoodView(APIView):
        
        def get(self,request):
                filter_cuisine = Food.objects.filter()
                serializer_class = FoodSerializer
    
    # def post(self,request,id=None):
        
    #     try:
    #         Hotels=Zoggy.objects.get(id_Hotel=id)
    #     except Zoggy.DoesNotExist:
    #         raise NotFound('No id found')
        
        

        
    
        
    