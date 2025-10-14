# Meeting Summarizer

This application transcribes meeting audio files and generates a summary with key decisions and action items.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd MeetingSummarizer/Backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Set up environment variables:**
    -   Create a `.env` file in the `Backend` directory.
    -   Add your Gemini API key to the `.env` file:
        ```
        GEMINI_API_KEY=your_gemini_api_key
        ```

## Usage

1.  **Run the Flask application:**
    ```bash
    python app.py
    ```

2.  **Open your browser** and navigate to `http://127.0.0.1:5000/`.

3.  **Upload an audio file** and click "Summarize" to view the summary.

## API Endpoint

-   **`POST /summarize`**
    -   **Description:** Uploads an audio file for transcription and summarization.
    -   **Request:** `multipart/form-data` with a single file field named `file`.
    -   **Response:** A JSON object containing the summary.
        ```json
        {
            "summary": "This is a summary of the meeting..."
        }
        ```
