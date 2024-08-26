from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String, PrimaryKeyConstraint
import os

app = Flask(__name__)

class Base(DeclarativeBase):
    pass

db = SQLAlchemy(model_class=Base)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("DB_URI", "sqlite:///contact-list.db")
db.init_app(app)

class Contact(db.Model):
    __tablename__ = 'contact'  # optional: specify table name
    email = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    number = db.Column(db.BigInteger, primary_key=True)


with app.app_context():
    db.create_all()


@app.route("/")
def home():
    return render_template("index.html")

@app.route("/success", methods=["GET", "POST"])
def receive_data():
    if request.method == "POST":
        try:
            data = Contact(name=request.form["username"], email=request.form["email"], number=request.form["contact_number"])
            db.session.add(data)
            db.session.commit()
            return render_template("success.html")
        except Exception as e:
            db.session.rollback()  # Rollback session on error
            return f"An error occurred: {str(e)}", 500
    else:
        return redirect(url_for("home"))
    
@app.route("/sample1")
def sample1():
    return render_template("sampleind.html")

@app.route("/sample2")
def sample2():
    return render_template("sample2.html")

if __name__=="__main__":
    app.run(debug=True)