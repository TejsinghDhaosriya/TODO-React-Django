import dj_database_url
from .base import *
DEBUG = True
WSGI_APPLICATION = 'config.wsgi.prod.application'

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
ALLOWED_HOSTS = ["tej-todo-backend.herokuapp.com"]