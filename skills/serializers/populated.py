from .common import SkillSerializer
from projects.serializers.common import ProjectSerializer

class PopulatedSkillSerializer(SkillSerializer):
    projects = ProjectSerializer(many=True)
