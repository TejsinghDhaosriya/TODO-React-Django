from .base import *
WSGI_APPLICATION = 'config.wsgi.prod.application'
DEBUG = True
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'URI' :"
postgres://ihunsvnyvxcsws:29bcc3dcd5d7e5a78bede5591a38f756507f09c5980f324578fb7c1dcb73834d@ec2-3-222-11-129.compute-1.amazonaws.com:5432/d2cpq23loldig8"
    }
}
STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'