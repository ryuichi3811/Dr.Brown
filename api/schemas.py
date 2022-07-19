from datetime import date
from typing import Union  
from pydantic import BaseModel

class ArticleSchemaIn(BaseModel):
    title: str
    description: str


class ArticleSchema(ArticleSchemaIn):
    id: int


class UserSchemaIn(BaseModel):
    name: str
    email: str
    birthday: date
    sex: str
    password: str
    


class UserSchema(BaseModel):
    id: int
    name: str
    email: str
    birthday: date
    sex: str


class LoginSchema(BaseModel):
    email: Union[str, None] = None
    password: Union[str, None] = None

    
class TokenData(BaseModel):
    email: Union[str, None] = None