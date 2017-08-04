from django.shortcuts import render
from django.http import HttpResponse
import requests
import os
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.decorators import parser_classes

from .models import Order

# Create your views here.
def index(request):
    return render(request, 'index.html')

def getActiveOrders(request):
    os.path.join(os.path.dirname(os.path.dirname(__file__)),'orders.json')
    with open('orders.json') as json_data:
        return HttpResponse(json_data)

@api_view(['POST'])
@parser_classes((JSONParser,))
def postOrder(request):
    if request.method == 'POST':

        jsonData = request.data

        if (jsonData['status'] == 3):
            completedOrder = Order.objects.get(id=jsonData['id'])
            remove(completedOrder)
        else:
            order = Order()
            order.id = jsonData['id']
            order.total = jsonData['total']
            order.tip = jsonData['tip']
            order.items = jsonData['items']
            order.tableNumber = jsonData['tableNumber']
            order.time = jsonData['time']
            order.status = jsonData['status']
            order.save()
               

    return HttpResponse(status=200)