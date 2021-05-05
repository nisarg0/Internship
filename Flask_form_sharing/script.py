from flask import Flask, redirect, url_for, request, render_template
import hashlib
app = Flask(__name__)


def create_link(uid,password):
    # uid_new = hashlib.md5(uid.encode())
    # pass_new = hashlib.md5(password.encode())
    return f"/final_dest/?user={uid}&password={password}"


@app.route('/final_dest/')
def final_dest():
    uid = request.values.get("user")
    password = request.values.get("password")
    # uid_new = hashlib.md5(uid.decode())
    # pass_new = hashlib.md5(password.decode())
    return render_template('login.html',UID = uid, password=password)


@app.route('/')
def landing_page():
   return render_template('home.html')


@app.route('/show_link/',methods = ['POST', 'GET'])
def show_link():
    if request.method == 'POST':
        uid = request.form['UID']
        password = request.form['password']
    else:
        uid = request.args.get('UID')
        password = request.args.get('password')   
    new_link = create_link(uid,password)
    return render_template('link_view.html', uid = uid,password = password,link = new_link)


if __name__ == '__main__':
   app.run(debug = True)