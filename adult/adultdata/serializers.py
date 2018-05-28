# appname/serializers.py, this file was created manually
from rest_framework import serializers
from .models import Adult

class AdultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adult
        fields = '__all__'
