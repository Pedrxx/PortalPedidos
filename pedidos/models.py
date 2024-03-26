from django.db import models

# Create your models here.

class Pedido(models.Model):
    num_ped = models.CharField(max_length=6, verbose_name="Número do Pedido")
    semana = models.CharField(max_lenght=1, verbose_name="Semana")

    def __str__(self):
        return "{} ({})".format(self.num_ped,self.semana)

class Produtos(models.Model):
    cod_bar = models(max_length=50, verbose_name="Cod. Barras")
    descricao = models(max_length=255, verbose_name="Descrição")

    def __str__(self):
        return "{} ({})".format(self.cod_bar,self.descricao)