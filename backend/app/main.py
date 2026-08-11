from fastapi import FastAPI

app = FastAPI(title="KEMIKL API")


@app.get("/health")
def health():
    return {"status": "ok", "product": "KEMIKL"}
