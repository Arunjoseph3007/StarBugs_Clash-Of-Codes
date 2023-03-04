from django.db import models

from django.contrib.auth.models import User
import os

def path_and_rename_for_resume(instance, filename):
    return os.path.join('addharcard_'+filename)

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


class Addhaardocument(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    body = models.TextField(blank=False,null=True)
    addharnumber = models.TextField(blank=False,null=True)
    file = models.FileField(upload_to=path_and_rename_for_resume,blank=True,null=True)
    owner = models.ForeignKey(User, related_name='addhar_number', on_delete=models.CASCADE)
    class Meta:
        ordering = ['created']


class Post_Like(models.Model):
    owner                           = models.ForeignKey(User, on_delete=models.CASCADE, related_name='like_user')
    group_post                      = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='like_post')
    create_date                     = models.DateTimeField(auto_now_add=True)
    class Meta:
        ordering = ['create_date']

class Groupdetail(models.Model):
	owner = models.ForeignKey(User, related_name='group_detail', on_delete=models.CASCADE)
	name = models.TextField(blank=True, null=True)
	source = models.TextField(blank=True, null=True)
	destination = models.TextField(blank=True, null=True)
	time = models.TextField(blank=True, null=True)
	start_date = models.TextField(blank=True, null=True)
	end_date = models.TextField(blank=True,null=True)
	description = models.TextField(blank=True, null=True)
	image = models.ImageField(null=True,blank=True)
	budget = models.TextField(blank=True, null=True)
	no_of_people = models.IntegerField(null=True, blank=True)
	meet_link= models.TextField(blank=True, null=True)
	travel_mode = models.TextField(blank=True, null=True)
	created = models.DateTimeField(auto_now_add=True)
	class Meta:
		ordering = ['created']


