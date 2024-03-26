from django.urls import path
from .views import IndexView, LoginView, InserirView

urlpatterns = [
    path('index/', IndexView.as_view(), name='index'),
    path('login/', LoginView.as_view(), name='login'),
    path('inserir/', InserirView.as_view(), name='inserir')
]