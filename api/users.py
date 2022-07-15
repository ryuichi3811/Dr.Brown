from typing import List
from token_generation import get_current_user
from fastapi import APIRouter, HTTPException, status, Depends
from schemas import UserSchemaIn, UserSchema, LoginSchema
from db import database, User
from passlib.hash import pbkdf2_sha256


router = APIRouter(
    tags=["Users"]
)

@router.get("/")
async def index():
    todo = {
        "todo":[
            {
                "id": 1,
                "name": "洗濯",
                "desc": "今日までにやる"
            },
            {
                "id": 2,
                "name": "ごはん食べる",
                "desc": "今日までにやる"
            }
        ]
        }
    return todo

@router.post('/users', status_code=status.HTTP_201_CREATED, response_model=UserSchema)
async def create(user: UserSchemaIn, current_user: UserSchema = Depends(get_current_user)):
    hashed_password = pbkdf2_sha256.hash(user.password)
    query = User.insert().values(
        name = user.name,
        email = user.email,
        birthday = user.birthday,
        sex = user.sex,
        password = hashed_password,
    )
    last_record_id = await database.execute(query)
    return {**user.dict(), "id": last_record_id}


@router.get('/users', response_model=List[UserSchema])
async def index(current_user: UserSchema = Depends(get_current_user)):
    query = User.select()
    return await database.fetch_all(query=query)

    
@router.get('/users/{id}/', response_model=UserSchema)
async def read(id: int, current_user: UserSchema = Depends(get_current_user)):
    query = User.select().where(id == User.c.id)
    myuser = await database.fetch_one(query)

    if not myuser:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, details="読み取りに失敗しました")
    return {**myuser}
    

@router.put('/users/{id}/', response_model=UserSchema)
async def updata(id: int, user: UserSchemaIn, current_user: UserSchema = Depends(get_current_user)):
    query = User.update().where(User.c.id == id).values(title=user.name)
    await database.execute(query)
    return {**user.dict(), "id": id}


@router.delete('/users/{id}/', status_code=status.HTTP_204_NO_CONTENT)
async def delete(id: int, current_user: UserSchema = Depends(get_current_user)):
    query = User.delete().where(User.c.id == id)
    await database.execute(query)
    return {"result": "Users deleted"}