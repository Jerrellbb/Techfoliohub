from django.db import models

# Create your models here.
class Project(models.Model):
  title = models.CharField(max_length=255)
  description = models.TextField(max_length=1000)
  start_date = models.DateField(null=True, blank=True)
  end_date = models.DateField(null=True, blank=True)
  image = models.URLField(max_length=100, null=True, blank=True)