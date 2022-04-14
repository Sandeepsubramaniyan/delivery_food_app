from rest_framework.routers import SimpleRouter
from .views import ZoggyViewSet 


router = SimpleRouter()
router.register('displays',ZoggyViewSet)


urlpatterns = router.urls 
    
