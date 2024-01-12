from .common import UserSerializer

from projects.serializers.common import ProjectSerializer


class PopulatedUserSerializer(UserSerializer):
  # used to populate serializer with related name foregin key
  
  project = ProjectSerializer(many=True, read_only=True)