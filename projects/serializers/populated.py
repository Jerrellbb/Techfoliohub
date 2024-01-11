from .common import ProjectSerializer

from skills.serializers.common import SkillSerializer


class PopulatedProjectSerializer(ProjectSerializer):
  # used to populate serializer with related name foregin key
  
  skill = SkillSerializer(many=True)