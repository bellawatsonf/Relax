# ADD USERS

**Add Users**
----
  to add user

* **URL**

  /register

* **Method:**
  

  `POST` 



* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 Created <br />
    **Content:** 
    ```json
    {
      "username" : "selena",
      "email" : "selena@gmmail.com",
      "password" : "selena"
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```


# login USERS

**login Users**
----
  to login user

* **URL**

  /login

* **Method:**
  

  `POST` 



* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 Created <br />
    **Content:** 
    ```json
    {
        "email" : "fitsolyna@gmail.com",
        "password":"fitsolyna"

    }
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Error <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```

    # GET Friend

**find All friend**
----
  to find all friend

* **URL**

  /friend

* **Method:**
  

  `GET` 

* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 Ok <br />
    **Content:** 
    ```json
   [
    {
        "id": 1,
        "UserId": 1,
        "FriendId": 2,
        "createdAt": "2022-01-18T17:05:55.314Z",
        "updatedAt": "2022-01-18T17:05:55.314Z",
        "Friends": {
            "id": 2,
            "username": "fitsolyna",
            "email": "fitsolyna@gmail.com",
            "password": "$2a$10$635kgdDtldUhBrXpxkspq.ZvEoPT0.EYgFWqQcmmzdm0hBMidIUU6",
            "createdAt": "2022-01-18T17:04:30.187Z",
            "updatedAt": "2022-01-18T17:04:30.187Z"
        },
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 3,
        "UserId": 1,
        "FriendId": 3,
        "createdAt": "2022-01-20T12:10:50.425Z",
        "updatedAt": "2022-01-20T12:10:50.425Z",
        "Friends": {
            "id": 3,
            "username": "fitsolyna2",
            "email": "fitsolyna2@gmail.com",
            "password": "$2a$10$WPazwcFnCXd6aIAIMhCoT.shD2xMxmum85.snfbh.m7r5vvKi0ySC",
            "createdAt": "2022-01-20T12:09:46.227Z",
            "updatedAt": "2022-01-20T12:09:46.227Z"
        },
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    }
]
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```

# ADD friend

**Add friend**
----
  to add friend

* **URL**

  /friend/:id

* **Method:**
  

  `POST` 


* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 Created <br />
    **Content:** 
    ```json
    {
    "message": "add friend succes"
}
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```


    # GET favorite

**find All favorite**
----
  to find all favorite

* **URL**

  /favorite

* **Method:**
  

  `GET` 

* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 Ok <br />
    **Content:** 
    ```json
   [
    {
        "id": 2,
        "UserId": 1,
        "ArtistId": 892,
        "title": "my universe",
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
        "picture": "https://api.deezer.com/artist/892/image",
        "createdAt": "2022-01-20T08:16:06.975Z",
        "updatedAt": "2022-01-20T08:16:06.975Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 3,
        "UserId": 1,
        "ArtistId": 892,
        "title": "my universe",
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
        "picture": "https://api.deezer.com/artist/892/image",
        "createdAt": "2022-01-20T08:55:03.168Z",
        "updatedAt": "2022-01-20T08:55:03.168Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 4,
        "UserId": 1,
        "ArtistId": 892,
        "title": "892",
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
        "picture": "https://api.deezer.com/artist/892/image",
        "createdAt": "2022-01-20T10:21:30.645Z",
        "updatedAt": "2022-01-20T10:21:30.645Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 5,
        "UserId": 1,
        "ArtistId": 892,
        "title": "892",
        "preview": "https://cdns-preview-c.dzcdn.net/stream/c-c7f32280916bc10e989ca5f4ed3b8afb-7.mp3",
        "picture": "https://api.deezer.com/artist/892/image",
        "createdAt": "2022-01-20T10:21:41.691Z",
        "updatedAt": "2022-01-20T10:21:41.691Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 6,
        "UserId": 1,
        "ArtistId": 598,
        "title": "598",
        "preview": "https://cdns-preview-5.dzcdn.net/stream/c-51724622d2444c20c311ecc0d256db22-6.mp3",
        "picture": "https://api.deezer.com/artist/598/image",
        "createdAt": "2022-01-20T10:23:40.023Z",
        "updatedAt": "2022-01-20T10:23:40.023Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 7,
        "UserId": 1,
        "ArtistId": 598,
        "title": "New Light",
        "preview": "https://cdns-preview-9.dzcdn.net/stream/c-93a46f9c1d28517a2c2f5afba186270c-3.mp3",
        "picture": "https://api.deezer.com/artist/598/image",
        "createdAt": "2022-01-20T10:24:17.839Z",
        "updatedAt": "2022-01-20T10:24:17.839Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    }
]
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```

# ADD favorite

**Add favorite**
----
  to add favorite

* **URL**

  /favorite

* **Method:**
  

  `POST` 


* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 Created <br />
    **Content:** 
    ```json
   {
    "id": 9,
    "UserId": 1,
    "title": "my universe",
    "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
    "picture": "https://api.deezer.com/artist/892/image",
    "ArtistId": 892,
    "updatedAt": "2022-01-21T08:52:32.396Z",
    "createdAt": "2022-01-21T08:52:32.396Z"
}
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```

    # GET playlist

**find All playlist**
----
  to find all playlist

* **URL**

  /playlist

* **Method:**
  

  `GET` 

* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 Ok <br />
    **Content:** 
    ```json
  [
    {
        "id": 1,
        "UserId": 1,
        "title": "my universe",
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
        "picture": "https://api.deezer.com/artist/892/image",
        "ArtistId": 892,
        "createdAt": "2022-01-20T09:12:42.805Z",
        "updatedAt": "2022-01-20T09:12:42.805Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 2,
        "UserId": 1,
        "title": "my universe",
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
        "picture": "https://api.deezer.com/artist/892/image",
        "ArtistId": 892,
        "createdAt": "2022-01-20T09:14:37.316Z",
        "updatedAt": "2022-01-20T09:14:37.316Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 3,
        "UserId": 1,
        "title": "New Light",
        "preview": "https://cdns-preview-9.dzcdn.net/stream/c-93a46f9c1d28517a2c2f5afba186270c-3.mp3",
        "picture": "https://api.deezer.com/artist/598/image",
        "ArtistId": 598,
        "createdAt": "2022-01-20T11:36:39.342Z",
        "updatedAt": "2022-01-20T11:36:39.342Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    },
    {
        "id": 4,
        "UserId": 1,
        "title": "my universe",
        "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
        "picture": "https://api.deezer.com/artist/892/image",
        "ArtistId": 892,
        "createdAt": "2022-01-21T08:53:12.942Z",
        "updatedAt": "2022-01-21T08:53:12.942Z",
        "User": {
            "id": 1,
            "username": "bella",
            "email": "bella@gmail.com",
            "password": "$2a$10$BEY19hlhpvWPWhwUtU24puGCouNIQWlwx9hrl0BfZ8JE8UDgL34Em",
            "createdAt": "2022-01-18T16:09:26.606Z",
            "updatedAt": "2022-01-18T16:09:26.606Z"
        }
    }
]
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```

# ADD playlist

**Add playlist**
----
  to add playlist

* **URL**

  /playlist

* **Method:**
  

  `POST` 


* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 201 Created <br />
    **Content:** 
    ```json
  {
    "id": 4,
    "UserId": 1,
    "title": "my universe",
    "preview": "https://cdns-preview-a.dzcdn.net/stream/c-aad90d3b0b3efe55fb4b52b22be29eb9-3.mp3",
    "picture": "https://api.deezer.com/artist/892/image",
    "ArtistId": 892,
    "updatedAt": "2022-01-21T08:53:12.942Z",
    "createdAt": "2022-01-21T08:53:12.942Z"
}
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }

        # GET artist

**find All artist**
----
  to find all artist

* **URL**

  https://api.deezer.com/search?q=artist:"john mayer

* **Method:**
  

  `GET` 

* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 Ok <br />
    **Content:** 
    ```json
  {
            "id": 918205292,
            "readable": true,
            "title": "Monsters (feat. blackbear)",
            "title_short": "Monsters (feat. blackbear)",
            "title_version": "",
            "link": "https://www.deezer.com/track/918205292",
            "duration": 174,
            "rank": 557621,
            "explicit_lyrics": true,
            "explicit_content_lyrics": 1,
            "explicit_content_cover": 2,
            "preview": "https://cdns-preview-6.dzcdn.net/stream/c-6fed713c53d67b2e2865798509def307-5.mp3",
            "md5_image": "5afe3d8baa8ada707d5ad4c46d9cad75",
            "artist": {
                "id": 13191,
                "name": "All Time Low",
                "link": "https://www.deezer.com/artist/13191",
                "picture": "https://api.deezer.com/artist/13191/image",
                "picture_small": "https://e-cdns-images.dzcdn.net/images/artist/fdae7398aa8c6fdc23c1df6516faf1f9/56x56-000000-80-0-0.jpg",
                "picture_medium": "https://e-cdns-images.dzcdn.net/images/artist/fdae7398aa8c6fdc23c1df6516faf1f9/250x250-000000-80-0-0.jpg",
                "picture_big": "https://e-cdns-images.dzcdn.net/images/artist/fdae7398aa8c6fdc23c1df6516faf1f9/500x500-000000-80-0-0.jpg",
                "picture_xl": "https://e-cdns-images.dzcdn.net/images/artist/fdae7398aa8c6fdc23c1df6516faf1f9/1000x1000-000000-80-0-0.jpg",
                "tracklist": "https://api.deezer.com/artist/13191/top?limit=50",
                "type": "artist"
            },
            "album": {
                "id": 139279302,
                "title": "Wake Up, Sunshine",
                "cover": "https://api.deezer.com/album/139279302/image",
                "cover_small": "https://e-cdns-images.dzcdn.net/images/cover/5afe3d8baa8ada707d5ad4c46d9cad75/56x56-000000-80-0-0.jpg",
                "cover_medium": "https://e-cdns-images.dzcdn.net/images/cover/5afe3d8baa8ada707d5ad4c46d9cad75/250x250-000000-80-0-0.jpg",
                "cover_big": "https://e-cdns-images.dzcdn.net/images/cover/5afe3d8baa8ada707d5ad4c46d9cad75/500x500-000000-80-0-0.jpg",
                "cover_xl": "https://e-cdns-images.dzcdn.net/images/cover/5afe3d8baa8ada707d5ad4c46d9cad75/1000x1000-000000-80-0-0.jpg",
                "md5_image": "5afe3d8baa8ada707d5ad4c46d9cad75",
                "tracklist": "https://api.deezer.com/album/139279302/tracks",
                "type": "album"
            },
            "type": "track"
        },
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```


        # GET user

**find All user**
----
  to find all user

* **URL**

  /user?username=fit

* **Method:**
  

  `GET` 

* **Headers:**
  token : 'token'


* **Success Response:**
  
  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  * **Code:** 200 Ok <br />
    **Content:** 
    ```json
  [
    {
        "id": 2,
        "username": "fitsolyna",
        "email": "fitsolyna@gmail.com",
        "password": "$2a$10$635kgdDtldUhBrXpxkspq.ZvEoPT0.EYgFWqQcmmzdm0hBMidIUU6",
        "createdAt": "2022-01-18T17:04:30.187Z",
        "updatedAt": "2022-01-18T17:04:30.187Z"
    },
    {
        "id": 3,
        "username": "fitsolyna2",
        "email": "fitsolyna2@gmail.com",
        "password": "$2a$10$WPazwcFnCXd6aIAIMhCoT.shD2xMxmum85.snfbh.m7r5vvKi0ySC",
        "createdAt": "2022-01-20T12:09:46.227Z",
        "updatedAt": "2022-01-20T12:09:46.227Z"
    }
]
    ```
 
* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 500 Internal Server Errpr <br />
    **Content:** 
    ```json
      {
        "message" : "Internal Server Error"
      }
    ```
