from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import *

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password','email')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user

class userdetailserizalizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username']


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Invalid Details.")


class profileserializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class PostSerializer(serializers.ModelSerializer):
    #owner = serializers.ReadOnlyField(source='owner.name')
    owner = userdetailserizalizer(read_only=True)
    like_on_post_count = serializers.SerializerMethodField('get_like_on_group_post_count')
    def get_like_on_group_post_count(self,obj):
        like =  Post_Like.objects.filter(group_post=obj)
        return like.count()

    comment_on_post_count = serializers.SerializerMethodField('get_comment_on_group_post_count')
    def get_comment_on_group_post_count(self,obj):
        comment =  Comment.objects.filter(group_post=obj)
        return comment.count()

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'owner','images_post','location','youtube_link','like_on_post_count','comment_on_post_count']

class CommentSerializer(serializers.ModelSerializer):
    #owner = serializers.ReadOnlyField(source='owner.name')
    owner = userdetailserizalizer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'body', 'owner', 'group_post']


class PostLikeSerializer(serializers.ModelSerializer):
    #owner = serializers.ReadOnlyField(source='owner.name')
    owner = userdetailserizalizer(read_only=True)


    class Meta:
        model = Post_Like
        fields = ['id','owner','group_post','create_date']



class addharserializer(serializers.ModelSerializer):
    class Meta:
        model = Addhaardocument
        fields = '__all__'


class groupdetailserializer(serializers.ModelSerializer):
    class Meta:
        model = Groupdetail
        fields = '__all__'
