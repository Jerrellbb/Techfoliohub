# Generated by Django 5.0.1 on 2024-01-11 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_project_skills'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.URLField(blank=True, null=True),
        ),
    ]
