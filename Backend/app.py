import os
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from werkzeug.utils import secure_filename
from transcribe import transcribe_audio
from summarize import generate_summary

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/summarize', methods=['POST'])
def summarize_meeting():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        transcript = transcribe_audio(filepath)
        if "error" in transcript:
            return jsonify(transcript), 500
            
        summary = generate_summary(transcript['text'])
        if "error" in summary:
            return jsonify(summary), 500

        return jsonify(summary)

if __name__ == '__main__':
    app.run(debug=True)