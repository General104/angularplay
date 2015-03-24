import flask
from angularFlask import AngularFlask

app = AngularFlask(__name__)

@app.route("/data/<path:path>")
def sendDataFile(path):
	return flask.send_from_directory('data', path)

@app.route("/static/<path:path>")
def sendStaticFile(path):
	return app.send_static_file(path)

@app.route("/templates/partial/<path:path>")
def sendTemplate(path):
	return flask.render_template('/partial/%s'%path)

@app.route("/")
def hello():
	return flask.render_template('index.html')

if __name__ == "__main__":	
	app.debug = True
	app.run()