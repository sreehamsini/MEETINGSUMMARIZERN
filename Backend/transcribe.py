import whisper
import os

# Add FFmpeg to the system's PATH
ffmpeg_path = r"C:\ffmpeg\bin"
os.environ["PATH"] += os.pathsep + ffmpeg_path

def transcribe_audio(filepath):
    """Transcribes the audio file at the given filepath using the local Whisper model."""
    try:
        model = whisper.load_model("medium")
        result = model.transcribe(filepath)
        return {"text": result["text"]}
    except Exception as e:
        return {"error": str(e)}