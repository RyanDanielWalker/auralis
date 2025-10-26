from fastapi import APIRouter, Body
from pydantic import BaseModel
import random

router = APIRouter()

class MusicPrompt(BaseModel):
    prompt: str

@router.post("/generate")
def generate_music(data: MusicPrompt):
    """Mock endpoint for now — simulates AI output"""
    # temporary “fake” MP3 URL
    sample_tracks = [
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    ]
    return {
        "prompt": data.prompt,
        "url": random.choice(sample_tracks)
    }
