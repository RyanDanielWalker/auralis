from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.music import router as music_router

app = FastAPI(title="Auralis API")

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # ✅ restrict to these
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(music_router, prefix="/api/music")

@app.get("/")
def root():
    return {"message": "Auralis backend online."}
