# -*- coding: utf-8 -*-
from datetime import datetime
from sqlalchemy import (
    Boolean,
    Column,
    Date,
    Integer,
    String,
    Table,
    MetaData,
    create_engine,
)

from databases import Database

DATABASE_URL = "mysql+pymysql://root:@localhost/test?charset=utf8mb4"

engine = create_engine(DATABASE_URL)
metadata = MetaData()

Article = Table(
    "article",
    metadata,
    Column('id', Integer, primary_key=True),
    Column('title', String(100)),
    Column('description', String(255)),

)


User = Table(
    "user",
    metadata,
    Column('id', Integer, primary_key=True),
    Column('name', String(32,collation='utf8mb4_general_ci')),
    Column('email', String(64), unique=True),
    Column('birthday', Date),
    Column('sex', String(2,collation='utf8mb4_general_ci')),
    Column('password', String(255))
)

database = Database(DATABASE_URL)