from flask import Flask, request, render_template, jsonify, session
import requests
from ctypes import cdll
from datetime import datetime
import json
import random
from routes import bp as routes_bp

mylib = cdll.LoadLibrary('./lib/random.so')
mylib1 = cdll.LoadLibrary('./lib/random_id.so')

url_bd = 'http://localhost:2000/'
url_discord = 'http://localhost:3000/'

app = Flask(__name__)
app.secret_key = 'efwy8394grboepfji80wv8ywc23rjfhw0v8ephif0vy8e2vuoedds'

app.register_blueprint(routes_bp)


@app.route('/', methods=['POST'])
def handle_post_request():
    data = request.json  # Отримати дані у форматі JSON

    nickname = data.get('nickname')
    password = data.get('password')
    confirmPassword = data.get('confirmPassword')
    iddiscord = data.get('iddiscord')
    attempt = 0

    session['nickname'] = nickname
    session['password'] = password
    session['iddiscord'] = iddiscord
    session['attempt'] = attempt

    random_number = mylib.GenerateRandomNumber()
    random_number_id = mylib1.GenerateRandomNumber()

    session['random_number'] = random_number
    session['random_number_id'] = random_number_id


    # Отримання iddiscord і додавання його до POST-запиту на сервер

    data = {
        'iddiscord': iddiscord,
        'random_number': random_number
    }
    # Відправка POST-запиту на сервер
    response = requests.post(url_discord, json=data)

    if response.status_code == 200:
        print('+++')
    else:
        print(f'eror: {response.status_code}')
        print(response.text)


    return jsonify({"message": "POST request handled successfully"})




@app.route('/git', methods=['POST'])
def handle_post_request1():
    data = request.get_json()  

    if data is not None:
        code = data.get('code')
        nickname = session.get('nickname')
        password = session.get('password')
        iddiscord = session.get('iddiscord')
        random_number = session.get('random_number')
        

        if session['attempt'] != 8:
            if int(code) == int(random_number):

                add_user_to_json(nickname, password, iddiscord)

                with open('users.json', 'r') as file:
                    users_data = json.load(file)
                    for user_id, user_info in users_data.items():
                        for user in user_info:
                            if user['name'] == nickname and user['password'] == password:
                                session.clear()
                                session['access'] = user['access'] 
                                return "Logged in successfully!"

                return jsonify({"message": 1})
            else:
                session['attempt'] += 1
                return jsonify({"message": 2})
        else:
            return jsonify({"message": 3})




def generate_unique_random_digits(length, existing_keys):
    while True:
        unique_key = ''.join(str(random.randint(0, 9)) for _ in range(length))
        if unique_key not in existing_keys:
            return unique_key

def add_user_to_json(nickname, password, iddiscord):
    current_datetime = datetime.now().isoformat()
    user_data = {
        "name": nickname,
        "password": password,
        "datetime": current_datetime,
        "discord": iddiscord,
        "telegram": 0,
        "access": 1
    }

    with open('users.json', 'r+') as file:
        data = json.load(file)
        existing_keys = data.keys()
        unique_key = generate_unique_random_digits(18, existing_keys)
        data[unique_key] = [user_data]
        file.seek(0)
        json.dump(data, file, indent=4)



@app.route('/git_2', methods=['POST'])
def handle_post_request2():
    data = request.get_json()
    password = data.get('password')
    nickname = data.get('nickname')

    with open('users.json', 'r') as file:
        users_data = json.load(file)
        for user_id, user_info in users_data.items():
            for user in user_info:
                if user['name'] == nickname and user['password'] == password:
                    session.clear()
                    session['access'] = user['access'] 
                    return "Logged in successfully!"

    return "User not found"


@app.route('/git_3', methods=['POST'])
def handle_post_request3():
    session.clear()
    return "User not found"




if __name__ == '__main__':
    app.run(host='127.0.0.1', port=4000, debug=True)
