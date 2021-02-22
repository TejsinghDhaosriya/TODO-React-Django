# Generated by Django 3.0 on 2021-02-22 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0002_todo_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='name',
            field=models.CharField(max_length=255, verbose_name='name'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='todo_from',
            field=models.TimeField(verbose_name='todo_from'),
        ),
        migrations.AlterField(
            model_name='todo',
            name='todo_to',
            field=models.TimeField(verbose_name='todo_to'),
        ),
    ]