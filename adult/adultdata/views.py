# adultdata/views.py
from django.shortcuts import render

from rest_framework import viewsets
from rest_framework import generics
from .models import Adult
from .serializers import AdultSerializer

class AdultViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.all();

class AdultMaleViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(sex="Male")

class AdultFemaleViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(sex="Female")

class AdultWifeViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(relationship="Wife")

class AdultOwnChildViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(relationship="Own-child")

class AdultHusbandViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(relationship="Husband")

class AdultNotInFamilyViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(relationship="Not-in-family")

class AdultOtherRelativeViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(relationship="Other-relative")

class AdultUnmarriedViewSet(viewsets.ModelViewSet):
    serializer_class = AdultSerializer
    queryset = Adult.objects.filter(relationship="Unmarried")
