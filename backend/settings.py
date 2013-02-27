import local_settings

PORT = getattr(local_settings, 'PORT', 8080)
ENV = getattr(local_settings, 'ENV', 'develop')
