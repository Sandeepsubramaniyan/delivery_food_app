from rest_framework.views import APIView
from .serializers import ZoggySerializer
from .models import Zoggy
from rest_framework.response import Response
from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view



# Create your views here.

class ZoggyView(APIView):
        
        def get(self,request):
                displays = Zoggy.objects.all()
                serializer_class = ZoggySerializer(displays,many=True)            
                return Response(serializer_class.data)
        
          
        
class IndividualView(APIView):
        
        def get(self, request, pk):
                individual = get_object_or_404(Zoggy, pk=pk)
                serializer = ZoggySerializer(individual)
                return Response(serializer.individual)
        
                
    
    
    # def post(self,request,id=None):
        
    #     try:
    #         Hotels=Zoggy.objects.get(id_Hotel=id)
    #     except Zoggy.DoesNotExist:
    #         raise NotFound('No id found')
        
        

        
    
        
    