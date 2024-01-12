from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Project
from .serializers.common import ProjectSerializer
from .serializers.populated import PopulatedProjectSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly

class ProjectListCreateView(OwnerListCreateView):
  queryset = Project.objects.all()
  serializer_class = PopulatedProjectSerializer
  permission_classes = [IsAuthenticatedOrReadOnly]



class ProjectSingleViews(RetrieveUpdateDestroyAPIView):
  queryset = Project.objects.all()
  serializer_class = PopulatedProjectSerializer
  permission_classes = [IsOwnerOrReadOnly]
  

  def get_serializer_class(self):

    if self.request.method == 'PUT':
      return ProjectSerializer
    return PopulatedProjectSerializer