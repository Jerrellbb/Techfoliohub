from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Skill
from .serializers.common import SkillSerializer
from .serializers.populated import PopulatedSkillSerializer

# Path: /Skills/
# Methods: GET, POST
class SkillListCreateView(ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

# Path: /Skills/:pk/
# Methods: GET, PUT, PATCH, DELETE
class SkillDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PopulatedSkillSerializer
        return SkillSerializer