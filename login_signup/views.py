from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework import status,permissions,viewsets
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from .models import *
from .serializers import *
from django.db.models import Q
import os
import requests
import json

########################Login signup part begins####################################


mult = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 0, 6, 7, 8, 9, 5], [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7], [4, 0, 1, 2, 3, 9, 5, 6, 7, 8], [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2], [7, 6, 5, 9, 8, 2, 1, 0, 4, 3], [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]]
perm = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 5, 7, 6, 2, 8, 3, 0, 9, 4], [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7], [9, 4, 5, 3, 1, 2, 6, 8, 7, 0], [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5], [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]]


def Validate(aadharNum):
    try:
        i = len(aadharNum)
        j = 0
        x = 0

        while i > 0:
            i -= 1
            x = mult[x][perm[(j % 8)][int(aadharNum[i])]]
            j += 1
        if x == 0:
            return 'Valid Aadhar Number'
        else:
            return 'Invalid Aadhar Number'

    except ValueError:
        return 'Invalid Aadhar Number'
    except IndexError:
        return 'Invalid Aadhar Number'


def gettingmeetlink():

    reqUrl = "https://api.whereby.dev/v1/meetings"

    headersList = {
     "Accept": "*/*",
     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
     "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNjc3OTI0NzIzLCJvcmdhbml6YXRpb25JZCI6MTc5NjQ3LCJqdGkiOiJjMjg5YjlmYS05YTM5LTQxNmYtODU0MC1hOTFkZDZmOWY5ZDUifQ.ENiPCQJeaohvoyn1Qlm1tcki88joCLR7oCwytxVBA7I",
     "Content-Type": "application/json" 
    }

    payload = json.dumps({
      "templateType": "viewerMode",
      "isLocked": False,
      "roomNamePrefix": "example-prefix",
      "roomNamePattern": "uuid",
      "roomMode": "normal",
      "startDate": "2023-03-05T14:15:22Z",
      "endDate": "2023-03-08T14:15:22Z",
      "fields": [
        "hostRoomUrl"
      ]
    })

    response = requests.request("POST", reqUrl, data=payload,  headers=headersList)

    print(response.text)
    x = json.loads(response.text)
    return x.get('hostRoomUrl')




class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": userdetailserizalizer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        
             
        return Response({
            "user": userdetailserizalizer(user, context=self.get_serializer_context()).data,
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


########################addhar card part begins####################################

class AddharList(generics.ListCreateAPIView):
    queryset = Addhaardocument.objects.all()
    serializer_class = addharserializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        addharnumber = request.POST.get('addharnumber')
        file = request.FILES['file']
        if (len(addharnumber) == 12 and addharnumber.isdigit()):
            x = Validate(addharnumber)
            user = Profile.objects.get(user=self.request.user)
            user.is_verify = True
            user.save()
            if x:
                data = Addhaardocument.objects.create(addharnumber = addharnumber,file=file,owner=self.request.user)
                serializer = addharserializer(data).data
                return Response(serializer)
            else:
                return Response("Invalid Aadhar Number")
        else:
            print('Invalid Aadhar Number')
            return Response('Invalid Aadhar Number')
    
    def get(self,request):
        datane =  Addhaardocument.objects.filter(owner=self.request.user)
        serializer = addharserializer(datane,many=True)
        return Response(serializer.data)



#########################Group part begins ############################################

class groupList(generics.ListCreateAPIView):
    queryset = Groupdetail.objects.all()
    serializer_class = groupdetailserializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self,request):
        name = request.POST.get('name')
        source = request.POST.get('source')
        destination = request.POST.get('destination')
        time = request.POST.get('time')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')
        description = request.POST.get('description')
        slogan = request.POST.get('slogan')
        image = request.FILES['image']
        budget = request.POST.get('budget')
        no_of_people = request.POST.get('no_of_people')
        travel_mode = request.POST.get('travel_mode')

        meet_link = 'https://chal-mere-yaar.whereby.com/example-prefix915e7ef0-dc34-4abb-bd88-b06eef858a6a?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI3MDc5NDgzNCIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvZXhhbXBsZS1wcmVmaXg5MTVlN2VmMC1kYzM0LTRhYmItYmQ4OC1iMDZlZWY4NThhNmEiLCJvcmdhbml6YXRpb25JZCI6IjE3OTY0NyJ9LCJpc3MiOiJodHRwczovL2FjY291bnRzLnNydi53aGVyZWJ5LmNvbSIsImlhdCI6MTY3Nzk1NTE3MCwicm9vbUtleVR5cGUiOiJtZWV0aW5nSG9zdCJ9.5kJzVDfFSe6XoNnwgAyIARKmzH4atVamdTXKk0kLCRE'
        print(meet_link)

        userde = Groupdetail.objects.create(owner = self.request.user,name = name,slogan=slogan,source=source,destination=destination,time=time,start_date=start_date,end_date=end_date,description=description,image=image,budget=budget,no_of_people=no_of_people,travel_mode=travel_mode,meet_link=meet_link)
        dateof = groupdetailserializer(userde)
        return Response(dateof.data)



class groupList_destroy_view(generics.RetrieveUpdateDestroyAPIView):
    queryset = Groupdetail.objects.all()
    serializer_class = groupdetailserializer
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self,request,pk=None):
        like = Groupdetail.objects.filter(id=pk)
        data = groupdetailserializer(like,many=True)
        return Response(data.data)

class groupListonlyget(generics.ListCreateAPIView):
    queryset = Groupdetail.objects.all()
    serializer_class = groupdetailserializer
    permission_classes = [permissions.IsAuthenticated]

    def get(self,request):
        query = request.GET.get('query')
        if query:
            like = Groupdetail.objects.filter(Q(name__icontains=query) | Q(source=query)|Q(destination=query) | Q(travel_mode =query))
            data = groupdetailserializer(like,many=True)
            return Response(data.data)

        else:
            like = Groupdetail.objects.filter(owner=self.request.user)
            data = groupdetailserializer(like,many=True)
            return Response(data.data)



class interest_post(generics.ListCreateAPIView):
    queryset = group_post_interest.objects.all()
    serializer_class = grouppostinterestserializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


