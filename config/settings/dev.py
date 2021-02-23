'''Use this for development'''

from .base import *
DEBUG = True
WSGI_APPLICATION = 'config.dev.application'
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    },
    
}

CORS_ORIGIN_ALLOW_ALL = True
ALLOWED_HOSTS = ["localhost", "0.0.0.0", "127.0.0.1"]


