from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from model_utils.models import TimeStampedModel

from core.behaviours import StatusMixin

class Todo(StatusMixin, TimeStampedModel):
    name = models.CharField(_('Name'), max_length=255, blank=False, null=False)
    todo_from = models.IntegerField()
    todo_to = models.IntegerField()
    
    def __str__(self):
        return self.name
   
