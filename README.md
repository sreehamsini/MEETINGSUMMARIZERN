# Meeting Summarizer

## Objective
This project provides a simple yet powerful tool to transcribe meeting audio files and generate concise, action-oriented summaries. It is designed to quickly extract key decisions and action items from lengthy discussions, improving productivity and ensuring important outcomes are not missed.

## Features
- **Audio Transcription:** Utilizes OpenAI's Whisper model to accurately transcribe spoken words from audio files.
- **Action-Oriented Summaries:** Leverages a Hugging Face `transformers` model to generate summaries that specifically highlight key decisions and action items.
- **Web-Based Interface:** A simple and clean frontend allows for easy audio file uploads and displays the generated summary.
- **Local & Free:** The entire process runs locally without relying on any paid cloud services, ensuring privacy and cost-effectiveness.

## Technical Stack
- **Backend:** Flask
- **Transcription:** `openai-whisper` (medium model)
- **Summarization:** `transformers` (facebook/bart-large-cnn)
- **Frontend:** HTML, CSS, JavaScript

## Setup and Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd MeetingSummarizer
    ```

2.  **Install FFmpeg:**
    The Whisper model requires FFmpeg. Please follow the official installation instructions for your operating system: [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html)

3.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

4.  **Install the required Python packages:**
    ```bash
    pip install -r Backend/requirements.txt
    ```

## How to Run the Application

1.  **Start the Flask server:**
    ```bash
    python Backend/app.py
    ```

2.  **Open your web browser:**
    Navigate to `http://127.0.0.1:5000`

## How to Use

1.  Click the "Choose File" button to select an audio file from your computer.
2.  Click the "Summarize" button to begin the transcription and summarization process.
3.  Please be patient, as the initial model download and the transcription of large files can take some time.
4.  The generated summary, including key decisions and action items, will be displayed on the page.

## Project Structure
```
.
├── Backend/
│   ├── app.py              # Flask application
│   ├── transcribe.py       # Audio transcription logic
│   ├── summarize.py        # Text summarization logic
│   ├── requirements.txt    # Python dependencies
│   ├── templates/
│   │   └── index.html      # Frontend HTML
│   └── uploads/            # Directory for uploaded audio files
└── README.md