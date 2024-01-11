from rest_framework import serializers
# use import ModelSerialiers next time instead of just seriealisers the sam as seriealisers.modelserialiser just shorter
from ..models import Project

class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project # the model that is used to serialize the queryset
    fields = '__all__' # which fields to serialize