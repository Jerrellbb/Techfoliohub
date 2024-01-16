from rest_framework.generics import  DestroyAPIView
from .serializers.common import CommentSerializer
from .models import Comment
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
# Create your views here.
class CommentCreateView(OwnerListCreateView):
  queryset = Comment.objects.all()
  serializer_class = CommentSerializer


# path Comment/:pk/
class CommentDestroyView(DestroyAPIView):
  queryset = Comment.objects.all()
  serialiser_class = CommentSerializer
  permission_classes = [IsOwnerOrReadOnly]