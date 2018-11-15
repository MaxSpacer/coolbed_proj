"""coolbed_proj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
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
from django.urls import re_path, path
from products import views
from orders import views

# from django.contrib.staticfiles import views
# from django.urls import path, re_path, include
# from filebrowser.sites import site
# from django.conf import settings
# from django.conf.urls.static import static
# app_name = 'products'

urlpatterns = [
    path('', views.basket_adding, name='basket_adding'),
    # re_path(r'(?P<product_id>[0-9])/$', views.product, name='product_n'),
]
