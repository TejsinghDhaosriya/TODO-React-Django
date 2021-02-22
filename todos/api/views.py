from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import TodoSerializer
from ..models import Todo
import django_filters


# class TodoFilter(django_filters.FilterSet):
#     # min_from = django_filters.NumberFilter(name="todo_from", lookup_type='gte')
#     # max_from = django_filters.NumberFilter(name="todo_from", lookup_type='lte')
#     class Meta:
#         model = Todo
#         fields = ['is_active']



class TodoViewSet(ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    filter_fields = ['is_active','date']
    # filter_class = TodoFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.is_deleted = True
        instance.save()
        return Response({"success": "Todo Deleted Successfully"}, status=status.HTTP_202_ACCEPTED)