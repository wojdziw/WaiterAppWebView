from django.shortcuts import render
from django.http import HttpResponse
import requests

from .models import Greeting

# Create your views here.
def index(request):
    return render(request, 'index.html')


