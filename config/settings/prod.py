import dj_database_url
from .base import *
DEBUG = True
WSGI_APPLICATION = 'config.wsgi.prod.application'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'root',
        'USER': 'root',
        'PASSWORD': 'root',
        'HOST': 'localhost',
        'PORT': '',
    }
}

db_from_env = dj_database_url.config(conn_max_age=500)
DATABASES['default'].update(db_from_env)

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
ALLOWED_HOSTS = ["tej-todo-backend.herokuapp.com"]