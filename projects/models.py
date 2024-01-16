from django.db import models

# Create your models here.
class Project(models.Model):
  title = models.CharField(max_length=255,null=True, blank=True)
  description = models.TextField(max_length=1000,null=True, blank=True)
  start_date = models.DateField(null=True, blank=True)
  end_date = models.DateField(null=True, blank=True)
  image = models.URLField(null=True, blank=True)
  project_link = models.URLField(null=True, blank=True)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='owned_projects',
    null=True
  )
  skills = models.ManyToManyField(
    to='skills.Skill',
    related_name='project'
  )

  def __str__(self):
    return f'{self.title}'