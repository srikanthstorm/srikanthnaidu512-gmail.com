export const config = {
  "dev": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "udagram.cbvw7jledvd0.us-west-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion":"ap-south-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram512",
    "url": "http://localhost:8100"  
  },
  "prod": {
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    "host": "udagram.cbvw7jledvd0.us-west-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_reigion":"us-west-2a",
    "aws_profile": "default",
    "aws_media_bucket": "udagramdemo",
    "url": "http://localhost:8100"  
  },
  "jwt": {
    "secret": "helloworld"
  }

}
