from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from model_utils.models import TimeStampedModel

from core.behaviours import StatusMixin

class Todo(StatusMixin, TimeStampedModel):
    name = models.CharField(_('name'), max_length=255, blank=False, null=False)
    todo_from = models.IntegerField(_("todo_from"))
    todo_to = models.IntegerField(_("todo_to"))
    date=models.DateField(_("date"), auto_now=False, auto_now_add=False)
    
    def __str__(self):
        return self.name
