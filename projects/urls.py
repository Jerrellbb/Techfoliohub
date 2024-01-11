from django.urls import path

from .views import ProjectListCreateView, ProjectSingleViews
urlpatterns = [

  path('', ProjectListCreateView.as_view()),
  path('<int:pk>/', ProjectSingleViews.as_view()),
  
]