from flask import Blueprint, render_template, session


bp = Blueprint('routes', __name__)

@bp.route('/')
def home():
    access = session.get('access')
    return render_template('index.html', access=access)


@bp.route('/music')
def music():
    return render_template('dist/music.html')


@bp.route('/short')
def short():
    return render_template('dist/short.html')


@bp.route('/game')
def game():
    return render_template('dist/game.html')



#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon
#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon
#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon
#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon
#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon
#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon#fon

@bp.route('/fon')
def fon():
    return render_template('fon/0.html')


@bp.route('/fon1')
def fon1():
    return render_template('fon/1.html')


@bp.route('/fon2')
def fon2():
    return render_template('fon/2.html')


@bp.route('/fon3')
def fon3():
    return render_template('fon/3.html')


@bp.route('/fon4')
def fon4():
    return render_template('fon/4.html')


@bp.route('/fon5')
def fon5():
    return render_template('fon/5.html')


@bp.route('/fon6')
def fon6():
    return render_template('fon/6.html')


@bp.route('/fon7')
def fon7():
    return render_template('fon/7.html')


@bp.route('/fon8')
def fon8():
    return render_template('fon/8.html')


@bp.route('/fon9')
def fon9():
    return render_template('fon/9.html')


@bp.route('/fon10')
def fon10():
    return render_template('fon/10.html')


@bp.route('/fon11')
def fon11():
    return render_template('fon/11.html')


@bp.route('/fon12')
def fon12():
    return render_template('fon/12.html')


@bp.route('/fon13')
def fon13():
    return render_template('fon/13.html')



#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game
#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game
#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game
#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game
#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game
#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game#game

@bp.route('/snake')
def snake():
    return render_template('game/pc/snake.html')


@bp.route('/races')
def races():
    return render_template('game/pc/races.html')


@bp.route('/rain')
def rain():
    return render_template('game/pc/rain.html')

@bp.route('/tennis')
def tennis():
    return render_template('game/pc/tennis.html')


@bp.route('/tetris')
def tetris():
    return render_template('game/pc/tetris.html')


@bp.route('/ball')
def ball():
    return render_template('game/all/ball.html')


@bp.route('/ninja_Cube')
def ninja_Cube():
    return render_template('game/all/ninja_Cube.html')


@bp.route('/tic_tac_toe')
def tic_tac_toe():
    return render_template('game/all/tic_tac_toe.html')


@bp.route('/hare')
def hare():
    return render_template('game/all/hare.html')


@bp.route('/platforms')
def platforms():
    return render_template('game/all/platforms.html')


@bp.route('/stone_scissors_paper')
def stone_scissors_paper():
    return render_template('game/all/stone_scissors_paper.html')


@bp.route('/tetris_2')
def tetris_2():
    return render_template('game/all/tetris_2.html')


@bp.route('/targets')
def targets():
    return render_template('game/all/targets.html')


@bp.route('/tenis')
def tenis():
    return render_template('game/all/tenis.html')


@bp.route('/jump')
def jump():
    return render_template('game/all/jump.html')


@bp.route('/chess')
def chess():
    return render_template('game/all/chess.html')


@bp.route('/ninja')
def ninja():
    return render_template('game/all/ninja.html')