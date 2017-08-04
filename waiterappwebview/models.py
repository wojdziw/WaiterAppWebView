from django.contrib.postgres.fields import JSONField
from django.db import models

class Order(models.Model):
    id = models.CharField(max_length=200, primary_key=True)
    total = models.DecimalField(decimal_places=2, max_digits=8)
    tip = models.BooleanField()
    items = JSONField()
    tableNumber = models.CharField(max_length=200)
    time = models.DateTimeField()
    status = models.IntegerField()

class ActiveOrder(models.Model):
    id = models.CharField(max_length=200, primary_key=True)
    orderJSON = JSONField()
