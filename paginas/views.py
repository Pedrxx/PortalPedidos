from django.views.generic import TemplateView

# Cria uma view para a pagina inicial
# com herança da classe TemplateView

class IndexView(TemplateView):
     template_name = 'paginas/index.html'
     

class SobreView(TemplateView):
     template_name = 'paginas/sobre.html'
