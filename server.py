from flask import Flask, send_file, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allow requests from all origins during development

@app.route('/video')
def serve_video():
    video_path = 'xyz.mp4'  # Update this with the correct relative path
    try:
        if os.path.exists(video_path):
            return send_file(video_path, mimetype='video/mp4')
        else:
            return jsonify({'error': 'Video not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = 8000
    print(f"Server is running on port {port}")
    app.run(host='0.0.0.0', port=port)  # Listen on all interfaces
    
