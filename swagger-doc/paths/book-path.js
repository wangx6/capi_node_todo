module.exports = {
    "get": {
      "summary": "Return a list of books.",
      // "parameters": [
      //   {
      //     "in": "path",
      //     "name": "userId",
      //     "required": true,
      //     "type": "integer",
      //     "minimum": 1,
      //     "description": "The ID of the user to return."
      //   }
      // ],
      "responses": {
        "200": {
          "description": "A User object.",
          "schema": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "example": 4
              },
              "name": {
                "type": "string",
                "example": "Arthur Dent"
              }
            }
          }
        },
        "400": {
          "description": "The specified user ID is invalid (e.g. not a number)."
        },
        "404": {
          "description": "A user with the specified ID was not found.",
          "schema": {
            "type": "object",
            "properties": {
              "ok": {
                "type": "boolean",
                "example": false
              },
              "errors": {
                "type": "array",
                "example": [
                  "Not found"
                ]
              }
            }
          }
        },
        "default": {
          "description": "Unexpected error"
        }
      }
    }
  };