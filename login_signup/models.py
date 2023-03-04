from django.db import models

from django.contrib.auth.models import User
import os

# Create your models here.

class Profile(models.Model):
	user =  models.ForeignKey(User, related_name = 'profiledetails', on_delete=models.CASCADE) 

	name = models.CharField(max_length = 30)
	interest = models.TextField(null=True,blank=True)
	about = models.TextField(null=True,blank=True)
	profile_pic = models.ImageField(null=True,blank=True)
	is_verify = models.BooleanField(default=False)
	location = models.TextField(null=True,blank=True)
	dob = models.TextField(null=True,blank=True)
	gender = models.TextField(null=True,blank=True)
	social_link = models.TextField(null=True,blank=True)

	def __str__(self):
		return self.name


class Post(models.Model):
    created 			= models.DateTimeField(auto_now_add=True)
    title 				= models.CharField(max_length=100, blank=True, default='')
    body 				= models.TextField(blank=True, default='')
    location 			= models.TextField(blank=True,null=True)
    youtube_link 		= models.CharField(max_length=250, null=True, blank=True)
    images_post 		= models.ImageField(null=True,blank=True)
    owner			    = models.ForeignKey(User, on_delete=models.CASCADE,related_name='posts_by')

    class Meta:
        ordering = ['created']


class Comment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False)
    owner = models.ForeignKey(User, related_name='comments', on_delete=models.CASCADE)
    group_post = models.ForeignKey(Post, related_name='comment_post', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']

class Post_Like(models.Model):
    owner                           = models.ForeignKey(User, on_delete=models.CASCADE, related_name='like_user')
    group_post                      = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='like_post')
    create_date                     = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['create_date']

