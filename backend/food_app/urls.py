"""food_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from sys import api_version
from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from zoggy import views
from django.contrib import admin

urlpatterns = [path('admin/',admin.site.urls),
               path('display/',views.ZoggyViewSet.as_view())] 

urlpatterns= format_suffix_patterns(urlpatterns)