from django.views.generic import TemplateView

class InserirView(TemplateView):
     template_name = 'paginas/inclusao_pedido.html'

class IndexView(TemplateView):
     template_name = 'paginas/index.html'

class LoginView(TemplateView):
     template_name = 'paginas/login.html'

