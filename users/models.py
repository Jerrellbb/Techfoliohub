from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
  first_name = models.CharField(max_length=150, null=True, blank=True)
  last_name = models.CharField(max_length=150, null=True, blank=True)
  bio = models.TextField(max_length=300, null=True, blank=True)
  username = models.CharField(max_length=50, unique=True)
  linkedin = models.URLField(null=True, blank=True)
  github = models.URLField(null=True, blank=True)
  image = models.URLField(null=True, blank=True)
