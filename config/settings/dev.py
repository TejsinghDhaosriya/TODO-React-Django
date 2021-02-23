'''Use this for development'''

from .base import *
DEBUG = True
WSGI_APPLICATION = 'config.wsgi.dev.application'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    },
    
}


ALLOWED_HOSTS = ["*"]

CORS_ORIGIN_ALLOW_ALL = True
