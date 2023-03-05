# Generated by Django 3.1 on 2023-03-04 17:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('login_signup', '0002_addhaardocument'),
    ]

    operations = [
        migrations.CreateModel(
            name='Groupdetail',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(blank=True, null=True)),
                ('source', models.TextField(blank=True, null=True)),
                ('destination', models.TextField(blank=True, null=True)),
                ('time', models.TextField(blank=True, null=True)),
                ('start_date', models.TextField(blank=True, null=True)),
                ('end_date', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('budget', models.TextField(blank=True, null=True)),
                ('no_of_people', models.IntegerField(blank=True, null=True)),
                ('meet_link', models.TextField(blank=True, null=True)),
                ('travel_mode', models.TextField(blank=True, null=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='group_detail', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['created'],
            },
        ),
    ]