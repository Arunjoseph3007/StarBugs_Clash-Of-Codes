from django.urls import path
from .views import RegistrationAPI,LoginAPI, UserAPI
from . import views
from knox import views as knox_views

urlpatterns = [
    path('register/', RegistrationAPI.as_view()),
    path('login/', LoginAPI.as_view()),
    path('user/', UserAPI.as_view()),
    path('logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
    path('userdetail',UserAPI.as_view(),name='userdetail'),
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    path('comments/<int:pk>/', views.CommentDetail.as_view()),
    path('post-like/', views.LikePost_view.as_view()),
    path('post-like/<int:pk>/', views.LikePost_destroy_view.as_view()),
    path('profile-create',views.createprofile.as_view()),
    path('profile-detail/<int:pk>/', views.profileDetail.as_view())

]