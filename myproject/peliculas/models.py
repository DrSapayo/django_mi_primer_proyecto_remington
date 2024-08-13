from django.db import models

# Create your models here.
class Peliculas(models.Model):
    id = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=150, verbose_name='Titulo')
    imagen = models.ImageField(upload_to='imagenes/', verbose_name='Imagen', null= True, blank=True)
    descripcion = models.TextField(null=True, verbose_name='Descripcion')