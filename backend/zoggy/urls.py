from rest_framework.routers import SimpleRouter
from .views import ZoggyViewSet


router= SimpleRouter()
router.register("Zoggy",ZoggyViewSet)

urlpatterns =  router.urls
