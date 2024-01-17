from django.db import models

# Create your models here.
class Comment(models.Model):
  text = models.CharField(max_length=2000)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)
  project = models.ForeignKey(
    to='projects.Project',
    on_delete=models.CASCADE,
    related_name='comments',
    null=True,
    blank=True
  )
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='comments',
    null=True
  )
