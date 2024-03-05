from django.urls import path
from .views import IndexView, SobreView

urlpatterns = [
    # path('rotas'/, suaView, name='pagina-inicial')
    path('inicio/', IndexView.as_view(), name='index'),
    path('sobre/', SobreView.as_view(), name='sobre'),
]