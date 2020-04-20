from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Length, Email

class ContactForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(), Length(min=4)])

    email = StringField('Email',
                        validators=[DataRequired(), Email()]) 
