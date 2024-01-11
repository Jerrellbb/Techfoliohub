from rest_framework import serializers

from django.contrib.auth import get_user_model
User = get_user_model()


# if we want password confirmation to be passed by client we have to explicitly define it in a list/tuple or it will be ignored and we will not be able to use it for validation
class RegistrationSerializer(serializers.ModelSerializer):

  password = serializers.CharField(write_only=True)
  password_confirmation = serializers.CharField(write_only=True)
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password', 'password_confirmation', 'bio')
  
  def validate(self, data):
    password = data.get('password')
    password_confirmation = data.pop('password_confirmation')
    
    if password != password_confirmation:
      raise serializers.ValidationError('passwords do not match')
    return data
  
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user