# Generated by Django 3.2.9 on 2021-11-19 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, default='image-not-available_skumtg.png', null=True, upload_to=''),
        ),
    ]