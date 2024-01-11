from .common import GameSerializer

from skills.serializers.common import SkillSerializer


class PopulatedGameSerializer(GameSerializer):
  # used to populate serializer with related name foregin key
  
  skill = SkillSerializer(many=True)