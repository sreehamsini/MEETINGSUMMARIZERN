# Meeting Summarizer

This project is a web application that summarizes audio meetings. You can upload an audio file (MP3, WAV, or OGG), and the application will provide a transcription and a summary of the meeting. The frontend has been beautified with modern designs and interactive elements.

## Features

-   **Audio Transcription**: Utilizes OpenAI's Whisper model to accurately transcribe spoken words from audio files.
-   **Text Summarization**: Leverages a Hugging Face `transformers` model to generate concise summaries.
-   **Advanced Web Interface**: A modern, user-friendly React frontend with improved aesthetics and `react-icons` for visual cues, allowing for easy audio file uploads and displaying the generated summary and transcript.
-   **Local & Free**: The entire process runs locally without relying on any paid cloud services, ensuring privacy and cost-effectiveness.

## Tech Stack

### Frontend

-   **React**: A JavaScript library for building user interfaces.
-   **React Icons**: A library for including popular icons in your React projects.
-   **HTML, CSS, JavaScript**: Core web technologies for structure, styling, and interactivity.

### Backend

-   **Flask**: A lightweight web framework for Python.
-   **Whisper**: An automatic speech recognition (ASR) system from OpenAI for transcribing audio.
-   **Transformers**: A library from Hugging Face for natural language processing tasks, used here for summarization.
-   **PyTorch**: An open-source machine learning library.

## Getting Started

### Prerequisites

-   Node.js and npm (for the frontend)
-   Python and pip (for the backend)
-   **FFmpeg**: The Whisper model requires FFmpeg. Please follow the official installation instructions for your operating system: [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html)

### Installation and Running

#### Backend

1.  **Navigate to the `Backend` directory:**

    ```bash
    cd Backend
    ```

2.  **Create a virtual environment (recommended):**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install the required Python packages:**

    ```bash
    pip install -r requirements.txt
    ```

4.  **Run the Flask application:**

    ```bash
    python app.py
    ```

    The backend server will start on `http://127.0.0.1:5000`.

#### Frontend

1.  **Navigate to the `frontend` directory:**

    ```bash
    cd frontend
    ```

2.  **Install the required Node.js packages:**

    ```bash
    npm install
    ```

3.  **Start the React development server:**

    ```bash
    npm start
    ```

    The frontend application will open in your browser at `http://localhost:3000`.

### Usage

1.  Ensure both the backend and frontend servers are running.
2.  Open your browser and go to `http://localhost:3000`.
3.  Click the "Choose an audio file" button to select an audio file (MP3, WAV, or OGG) from your computer.
4.  Click the "Summarize" button to upload the file and start the transcription and summarization process.
5.  Please be patient, as the initial model download and the processing of large files can take some time.
6.  The generated summary and full transcript will be displayed on the page.

## Project Structure
```
.
├── Backend/
│   ├── app.py              # Flask application
│   ├── transcribe.py       # Audio transcription logic
│   ├── summarize.py        # Text summarization logic
│   ├── requirements.txt    # Python dependencies
│   └── uploads/            # Directory for uploaded audio files
├── frontend/
│   ├── public/             # Public assets (index.html, favicon, etc.)
│   ├── src/                # React source code (App.js, index.js, CSS)
│   ├── package.json        # Frontend dependencies and scripts
│   └── build/              # Optimized production build of the frontend
└── README.md