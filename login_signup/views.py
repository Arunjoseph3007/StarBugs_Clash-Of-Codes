from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework import status,permissions,viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .models import *
from .serializers import *
from django.db.models import Q
import os

########################Login signup part begins####################################

class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        
             
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = userdetailserizalizer

    def get_object(self):
        return self.request.user


########################Profile part begins####################################

class createprofile(generics.ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = profileserializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    def get_object(self):
        return self.request.user

class profileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Profile.objects.all()
    serializer_class = profileserializer
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self,request,pk=None):
        like = Profile.objects.filter(user_id=pk)
        data = profileserializer(like,many=True)
        return Response(data.data)
    def get_object(self):
        return self.request.user

########################Post part begins####################################

class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]



########################Comment part begins####################################

class CommentList(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self,request,pk=None):
        like = Comment.objects.filter(group_post=pk)
        data = CommentSerializer(like,many=True)
        return Response(data.data)


########################Like part begins####################################

class LikePost_view(generics.ListCreateAPIView):
    queryset = Post_Like.objects.all()
    serializer_class = PostLikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class LikePost_destroy_view(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post_Like.objects.all()
    serializer_class = PostLikeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self,request,pk=None):
        like = Post_Like.objects.filter(group_post=pk)
        data = PostLikeSerializer(like,many=True)
        return Response(data.data)


