from rest_framework import serializers
# use import ModelSerialiers next time instead of just seriealisers the sam as seriealisers.modelserialiser just shorter
from ..models import Project

class ProjectSerializer(serializers.ModelSerializer):
  owner_username = serializers.CharField(source='owner.username', read_only=True)
  owner_image = serializers.CharField(source='owner.image', read_only=True)
  class Meta:
    model = Project # the model that is used to serialize the queryset
    fields = ['id', 'title', 'description', 'start_date', 'end_date', 'image', 'project_link', 'owner', 'owner_username', 'skills', 'comments', 'owner_image']