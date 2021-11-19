from django.urls import path
from base.views import order_views as views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('', views.getOrders, name='orders'),

    path('add/', views.addOrderItem, name='orders-add'),
    path('myorders/', views.getMyOrders, name='myorders'),

    path('<str:pk>/', views.getOrderById, name='user-order'),
    path('<str:pk>/pay/', views.updateOrderToPaid, name='order-pay'),
    path('<str:pk>/deliver/', views.updateOrderToDelivered, name='order-deliver'),

]
