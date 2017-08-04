# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-08-04 11:13
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('waiterappwebview', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.CharField(max_length=200, primary_key=True, serialize=False)),
                ('total', models.DecimalField(decimal_places=2, max_digits=8)),
                ('tip', models.BooleanField()),
                ('items', django.contrib.postgres.fields.jsonb.JSONField()),
                ('tableNumber', models.CharField(max_length=200)),
                ('time', models.DateTimeField()),
                ('status', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='Greeting',
        ),
    ]