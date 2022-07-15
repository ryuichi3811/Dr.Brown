from fastapi import APIRouter, HTTPException, status, Depends
from schemas import LoginSchema
from fastapi.security import OAuth2PasswordRequestForm
from db import database, User
from passlib.hash import pbkdf2_sha256
from token_generation import create_access_token

router = APIRouter(
    tags=["Auth"]
)

@router.post('/login/')
async def login(request: OAuth2PasswordRequestForm = Depends()):
    query = User.select().where(User.c.email == request.username)
    myuser = await database.fetch_one(query)

    if not myuser:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User failed")
    
    if not pbkdf2_sha256.verify(request.password, myuser.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Invalid password")

    access_token = create_access_token(
        data={"sub": myuser.email})

    return {"access_token": access_token, "token_type": "bearer"}
    # return myuser