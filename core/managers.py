from django.db import models


class StatusMixinManager(models.Manager):
    def all(self, *args, **kwargs):
        return super(StatusMixinManager, self).filter(is_deleted=False)

    def active(self, *args, **kwargs):
        return super(StatusMixinManager, self).filter(is_active=True, is_deleted=False)
