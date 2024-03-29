from rest_framework import serializers

# use import ModelSerialiers next time instead of just seriealisers the sam as seriealisers.modelserialiser just shorter
from ..models import User
from projects.serializers.common import ProjectSerializer


from django.contrib.auth import get_user_model
User = get_user_model()


# if we want password confirmation to be passed by client we have to explicitly define it in a list/tuple or it will be ignored and we will not be able to use it for validation
class RegistrationSerializer(serializers.ModelSerializer):

  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)
  class Meta:
    model = User
    extra_fields = ['password_confirmation']
    fields = '__all__'
  
  def validate(self, data):
    password = data.get('password')
    password_confirmation = data.pop('password_confirmation')
    
    if password != password_confirmation:
      raise serializers.ValidationError('passwords do not match')
    return data
  
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user


class UserSerializer(serializers.ModelSerializer):
  owned_projects = ProjectSerializer(many=True, read_only=True)
  
  class Meta:
    model = User # the model that is used to serialize the queryset
    fields = '__all__' # which fields to serialize