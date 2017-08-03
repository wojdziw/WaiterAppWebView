from django.shortcuts import render
from django.http import HttpResponse
import requests
import os

from .models import Greeting

# Create your views here.
def index(request):
    return render(request, 'index.html')

def getActiveOrders(request):
    os.path.join(os.path.dirname(os.path.dirname(__file__)),'orders.json')
    with open('orders.json') as json_data:
        return HttpResponse(json_data)