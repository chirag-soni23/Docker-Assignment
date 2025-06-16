from flask import Flask,request,jsonify,render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/submit",methods=["POST"])
def submit():
    data = request.json
    name = data.get('name')
    email = data.get('email')

    return jsonify({"message":f"Received data => name: {name}, email: {email}"})

@app.route("/")
def view():
    return render_template("home.html")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000,debug=True)
