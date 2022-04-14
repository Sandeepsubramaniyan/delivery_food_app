from rest_framework.viewsets import ModelViewSet
from .serializers import ZoggySerializer
from .models import Zoggy



# Create your views here.

class ZoggyViewSet(ModelViewSet):
        
        serializer_class = ZoggySerializer            
        queryset = Zoggy.objects.all()
        
        
    
    
# class ZoggyIndividualViewSet(ModelViewSet):
#     def get(self,request,id):
#         display =Zoggy.objects.id()
#         serializer_class = ZoggySerializer(display)
#         return Response(serializer_class.data)
        
    
    
    # def post(self,request,id=None):
        
    #     try:
    #         Hotels=Zoggy.objects.get(id_Hotel=id)
    #     except Zoggy.DoesNotExist:
    #         raise NotFound('No id found')
        
        

        
    
        
    