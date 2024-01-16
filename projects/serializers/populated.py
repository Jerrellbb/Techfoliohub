from .common import ProjectSerializer
from skills.models import Skill
from skills.serializers.common import SkillSerializer
from comments.serializers.common import CommentSerializer


class PopulatedProjectSerializer(ProjectSerializer):
  # used to populate serializer with related name foregin key
  comments = CommentSerializer(many=True)
  skills = SkillSerializer(many=True)

  def create(self, validated_data):
        # Extract skills data and remove it from validated_data
        skills_data = validated_data.pop('skills', [])

        # Create the project without the skills first
        project = super().create(validated_data)

        # Create associated skills for the project
        for skill_data in skills_data:
            
            skill_name = skill_data.get('name')
            if skill_name:
                skill, _ = Skill.objects.get_or_create(name=skill_name)
                project.skills.add(skill)

        return project
  
  def update(self, instance, validated_data):
        # Extract skills data and remove it from validated_data
        skills_data = validated_data.pop('skills', [])

        # Update the project without the skills first
        instance = super().update(instance, validated_data)

        # Update associated skills for the project
        instance.skills.clear()
        for skill_data in skills_data:
            skill_name = skill_data.get('name')
            if skill_name:
                skill, _ = Skill.objects.get_or_create(name=skill_name)
                instance.skills.add(skill)

        return instance