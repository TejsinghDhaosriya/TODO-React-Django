from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from todos.api.views import TodoViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

# todos
router.register("todos", TodoViewSet)


app_name = "api"
urlpatterns = router.urls
