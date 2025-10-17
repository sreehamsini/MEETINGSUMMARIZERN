import os
from transformers import pipeline, BartForConditionalGeneration, BartTokenizer

def generate_summary(transcript):
    """Generates a summary of the transcript using a local Hugging Face model."""
    try:
        model_name = "facebook/bart-large-cnn"
        model = BartForConditionalGeneration.from_pretrained(model_name)
        tokenizer = BartTokenizer.from_pretrained(model_name)
        summarizer = pipeline("summarization", model=model, tokenizer=tokenizer)
        prompt = f"Please summarize the following meeting transcript. Identify the key decisions made and list them under a 'Key Decisions' heading. Then, identify any action items or tasks and list them under an 'Action Items' heading.\n\nTranscript:\n{transcript}"
        summary = summarizer(prompt, max_length=500, min_length=100, do_sample=False)
        return {"summary": summary[0]['summary_text'], "transcript": transcript}
    except Exception as e:
        return {"error": str(e)}