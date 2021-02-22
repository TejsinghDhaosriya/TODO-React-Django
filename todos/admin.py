from django.contrib import admin

from import_export.admin import ImportExportActionModelAdmin

from .models import Todo


@admin.register(Todo)
class TodoAdmin(ImportExportActionModelAdmin):
    model = Todo
    list_display = ['name', 'todo_from','todo_to','date', 'is_active', 'is_deleted', 'created',
                    'modified']
    list_filter = list_display
