from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import TodoSerializer
from ..models import Todo





class TodoViewSet(ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    filter_fields = ['is_active','date']

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.is_deleted = True
        instance.save()
        return Response({"success": "Todo Deleted Successfully"}, status=status.HTTP_202_ACCEPTED)