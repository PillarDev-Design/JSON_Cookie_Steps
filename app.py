#==============================================================================#
# app.py                                                                       #
# ---------------------------------------------------------------------------- #
# Central Flask framework logic for the JSON_Cookie_Steps project.             #
#==============================================================================#
import flask, datetime, json, re, pymongo

from backend import settings

#==============================================================================#
# Setup Flask App                                                              #
#==============================================================================#
app = flask.Flask(__name__)

# DB Connections
DB_CONNECTION = pymongo.Connection('localhost', 27017)
DB = DB_CONNECTION.JSON_Cookie_Steps

PORT = getattr(settings, 'PORT', 8080)
ENV = getattr(settings, 'ENV', 'develop')

# Redis Connection

#==============================================================================#
# Functions                                                                    #
#==============================================================================#

#==============================================================================#
# Static Endpoints                                                             #
#==============================================================================#
def render_skeleton(template_name='index.html', **kwargs):
    return flask.render_template(template_name, **kwargs)

@app.route('/')
def home():
    ret = {}

    # Blank

    return render_skeleton('home.html', **ret)

#==============================================================================#
# Run Server                                                                   #
#==============================================================================#
if __name__ == "__main__":
    if ENV == "develop":
        app.debug = True
        app.run(port=PORT)
