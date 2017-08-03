from django.conf.urls import include, url

from django.contrib import admin
admin.autodiscover()

import waiterappwebview.views

urlpatterns = [
    url(r'^$', waiterappwebview.views.index, name='index'),
    url(r'^getActiveOrders', waiterappwebview.views.getActiveOrders, name='getActiveOrders'),
    url(r'^admin/', include(admin.site.urls)),
]
