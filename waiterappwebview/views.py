from django.shortcuts import render
from django.http import HttpResponse
import requests
import os
import json
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes

from .models import ActiveOrder

# Create your views here.
def index(request):
    return render(request, 'index.html')

def getActiveOrders(request):
    activeObjectList = ActiveOrder.objects.all().values_list('orderJSON', flat=True)
    ordersJson = json.dumps(list(activeObjectList))
    return HttpResponse(ordersJson)


@api_view(['POST'])
@parser_classes((JSONParser,))
def postOrder(request):
    if request.method == 'POST':

        jsonData = request.data

        if (jsonData['status'] == 3):
            completedOrder = ActiveOrder.objects.get(id=jsonData['id'])
            completedOrder.delete()
        else:
            activeOrder = ActiveOrder()
            activeOrder.id = jsonData['id']
            activeOrder.orderJSON = jsonData
            activeOrder.save()
               
    return HttpResponse(status=200)