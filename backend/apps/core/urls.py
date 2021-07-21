from django.urls import path

from apps.core import views

urlpatterns = [
    path("", views.index, name="index"),
    path("health-check/", views.health_check, name="health_check"),
    path("version/", views.VersionView.as_view(), name="api-version"),
]
