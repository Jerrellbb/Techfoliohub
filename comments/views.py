from rest_framework.generics import  DestroyAPIView
from .serializers.common import CommentSerialiser
from .models import Comment
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly
# Create your views here.
class CommentCreateView(OwnerListCreateView):
  queryset = Comment.objects.all()
  serializer_class = CommentSerialiser


# path Comment/:pk/
class CommentDestroyView(DestroyAPIView):
  queryset = Comment.objects.all()
  serialiser_class = CommentSerialiser
  permission_classes = [IsOwnerOrReadOnly]