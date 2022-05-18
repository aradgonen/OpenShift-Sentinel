import json
import pymongo
myclient = pymongo.MongoClient("mongodb://mongodb:27017/")
mydb = myclient["mydatabase"]
mycol = mydb["audit"]

file_name = "audit.log"
file = open(file_name, "r")
data = []

for line in file.readlines():
    x = mycol.insert_one(json.loads(line[23:]))