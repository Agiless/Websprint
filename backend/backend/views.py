import pymongo as py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from pymongo import MongoClient

# Replace with your MongoDB Atlas connection string
MONGO_URI = "mongodb+srv://agilessshobika:JJXrLhPZdJMmtiFu@cluster0.ce9yj.mongodb.net/myDatabase?retryWrites=true&w=majority"

def connect_to_mongo():
    try:
        client = MongoClient(MONGO_URI)
        db = client["myDatabase"]  # Specify your database name
        print("✅ Connected to MongoDB Atlas!!")
        return db
    except Exception as e:
        print("❌ Failed to connect to MongoDB:", e)
        return None  # Return None if connection fails

@api_view(['POST'])
def my_post_view(request):
    data = request.data  # Get data from the request
    db = connect_to_mongo()

    if db is None:
        return Response({"error": "Database connection failed"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    try:
        chef = db["Chef"]  # Replace with your collection name
        foodie = db["foodie"]
        if data["type"] == "chef":
            del data["type"]
            inserted_id = chef.insert_one(data).inserted_id  # Insert data into the collection
        else:
            del data["type"]
            inserted_id = foodie.insert_one(data).inserted_id

        return Response(
            {"message": "Data inserted successfully", "inserted_id": str(inserted_id)},
            status=status.HTTP_201_CREATED
        )

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
