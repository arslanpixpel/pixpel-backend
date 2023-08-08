const swaggerDoc = {
    "openapi": "3.0.3",
    "info": {
      "title": "Pixpel-Backend",
      "description": "This is the documentation for the pixpel-backend, consisting of node js apis",
      "contact": {
        "email": "pixpel.io"
      },
      "version": "1.0.11"
    },
    "servers": [
      {
        "url": "http://localhost:3000"
      },
      {
        "url": "http://3.16.112.122:3000"
      }
    ],
    "tags": [
      {
        "name": "Players",
        "description": "People who can buy the nfts"
      },
      {
        "name": "Developers",
        "description": "People who own the nfts"
      },
      {
        "name": "Nfts",
        "description": "List of all the nfts available"
      },
      {
        "name": "Nftorders",
        "description": "Orders being made by the players for nfts"
      },
      {
        "name": "Collections",
        "description": "Multiple collections having multiple nfts"
      },
      {
        "name": "Cart",
        "description": "Cart will store items stored by players which can be bought later on"
      }
    ],
    "paths": {
      "/players/create": {
        "post": {
          "tags": [
            "player"
          ],
          "summary": "Add a new player to the store",
          "description": "Add a new player to the store",
          "operationId": "addPlayer",
          "requestBody": {
            "description": "Create a new player in the store",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Players"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Players"
                  }
                }
              }
            },
            "405": {
              "description": "Invalid input"
            }
          }
        },
      },
      "/players/read/{playerId}": {
        "get": {
          "tags": [
            "player"
          ],
          "summary": "Get an existing player",
          "description": "Get an existing player by Id",
          "operationId": "getPlayer",
          "parameters": [
            {
              "name": "playerId",
              "in": "path",
              "description": "ID of player to return",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Players"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Player not found"
            },
          }
        },
      },
      "/developers/create": {
        "post": {
          "tags": [
            "developer"
          ],
          "summary": "Add a new developer to the store",
          "description": "Add a new developer to the store",
          "operationId": "addDeveloper",
          "requestBody": {
            "description": "Create a new deveoper in the store",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Developers"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Developers"
                  }
                }
              }
            },
            "405": {
              "description": "Invalid input"
            }
          }
        },
      },
      "/developers/read/{developerId}": {
        "get": {
          "tags": [
            "developer"
          ],
          "summary": "Get an existing developer",
          "description": "Get an existing developer by Id",
          "operationId": "getDeveloper",
          "parameters": [
            {
              "name": "developerId",
              "in": "path",
              "description": "ID of developer to return",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Developers"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Developer not found"
            },
          }
        },
      },
      "/collections/create": {
        "post": {
          "tags": [
            "collections"
          ],
          "summary": "Add a new collection to the store",
          "description": "Add a new collection to the store",
          "operationId": "addCollection",
          "requestBody": {
            "description": "Create a new collection in the store",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Collections"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Collections"
                  }
                }
              }
            },
            "405": {
              "description": "Invalid Input"
            }
          }
        }
      },
      "/collections/read/{collectionId}": {
        "get": {
          "tags": [
            "collections"
          ],
          "summary": "Get an existing collection",
          "description": "Get an existing collection by Id",
          "operationId": "getCollection",
          "parameters": [
            {
              "name": "collectionId",
              "in": "path",
              "description": "ID of collection to return",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Collections"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Collection not found"
            }
          }
        },
        "put": {
          "tags": [
            "collections"
          ],
          "summary": "Update an existing collection",
          "description": "Update an existing collection by Id",
          "operationId": "updateCollection",
          "parameters": [
            {
              "name": "collectionId",
              "in": "path",
              "description": "ID of collection to update",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "description": "Update an existent collection in the store",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Collections"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Collections"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Collection not found"
            },
            "405": {
              "description": "Validation exception"
            }
          }
        },
        "delete": {
          "tags": [
            "collections"
          ],
          "summary": "Delete an existing collection",
          "description": "Delete an existing collection by Id",
          "operationId": "deleteCollection",
          "parameters": [
            {
              "name": "collectionId",
              "in": "path",
              "description": "ID of collection to delete",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Collections"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Collection not found"
            },
            "405": {
              "description": "Validation exception"
            }
          }
        }
      },     
      "/nfts/create": {
        "post": {
          "tags": [
            "nfts"
          ],
          "summary": "Add a new nft to the store",
          "description": "Add a new nft to the store",
          "operationId": "addnft",
          "requestBody": {
            "description": "Create a new nft in the store",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Nfts"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Nfts"
                  }
                }
              }
            },
            "405": {
              "description": "Invalid Input"
            }
          }
        }
      },
      "/nfts/read/{nftId}": {
        "get": {
          "tags": [
            "nfts"
          ],
          "summary": "Get an existing nft",
          "description": "Get an existing nft by Id",
          "operationId": "getnft",
          "parameters": [
            {
              "name": "nftId",
              "in": "path",
              "description": "ID of nft to return",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Nfts"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "nft not found"
            }
          }
        },
        "put": {
          "tags": [
            "nfts"
          ],
          "summary": "Update an existing nft",
          "description": "Update an existing nft by Id",
          "operationId": "updatenft",
          "parameters": [
            {
              "name": "nftId",
              "in": "path",
              "description": "ID of nft to update",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "requestBody": {
            "description": "Update an existent nft in the store",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Nfts"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Nfts"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "nft not found"
            },
            "405": {
              "description": "Validation exception"
            }
          }
        },
        "delete": {
          "tags": [
            "nfts"
          ],
          "summary": "Delete an existing nft",
          "description": "Delete an existing nft by Id",
          "operationId": "deletenft",
          "parameters": [
            {
              "name": "nftId",
              "in": "path",
              "description": "ID of nft to delete",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Nfts"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "nft not found"
            },
            "405": {
              "description": "Validation exception"
            }
          }
        }
      },       
      "/cart/add": {
        "post": {
          "tags": [
            "cart"
          ],
          "summary": "Add an item to the cart",
          "description": "Add an item to the cart",
          "operationId": "addToCart",
          "requestBody": {
            "description": "Item to add to the cart",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Cart"
                }
              }
            },
            "required": true
          },
          "responses": {
            "200": {
              "description": "Successful operation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Cart"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid input"
            }
          }
        }
      },
      "/cart/moveToOrders/{cartId}": {
        "post": {
          "tags": [
            "cart"
          ],
          "summary": "Move items from cart to orders",
          "description": "Move items from cart to orders",
          "operationId": "moveToOrders",
          "parameters": [
            {
              "name": "cartId",
              "in": "path",
              "description": "ID of cart to move to orders",
              "required": true,
              "schema": {
                "type": "integer",
                "format": "int64"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Successful operation"
            },
            "400": {
              "description": "Invalid input"
            }
          }
        }
      },            
    },
    "components": {
      "schemas": {
        "Players": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "John Doe"
            },
            "email": {
              "type": "string",
              "example": "john.doe@example.com"
            },
            "wallet": {
              "type": "string",
              "example": "0x123456789abcdef"
            }
          }
        },
        "Developers": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "Jane Doe"
            },
            "email": {
              "type": "string",
              "example": "jane.doe@example.com"
            },
            "wallet": {
              "type": "string",
              "example": "0xabcdef123456789"
            },
            "contact_details": {
              "type": "integer",
              "format": "int32",
              "example": 1234567890
            }
          }
        },
        "Collections": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "developer_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "My Collection"
            }
          }
        },
        "Nfts": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "name": {
              "type": "string",
              "example": "My NFT"
            },
            "description": {
              "type": "string",
              "example": "This is a description of my NFT."
            },
            "royalty_commission": {
              "type": "integer",
              "format": "int32",
              "example": 10
            },
            "primary_owner": {
              "type": "string",
              "example": "John Doe"
            },
            "ownership": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "example": ["John Doe", "Jane Doe"]
            },
            "type": {
              "type": "string",
              "enum": ["mystery", "open"],
              "example": "mystery"
            },
            "collection_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            }
          },
        },
        "Nftorders": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "player_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "nft_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "developer_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
          },
        },
        "Cart": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "player_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "nft_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
            "developer_id": {
              "type": "integer",
              "format": "int32",
              "example": 1
            },
          },
        },
      },
      "requestBodies": {
        "Nft": {
          "description": "Nfts object that needs to be added to the store",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Nfts"
              }
            }
          }
        },
      },
      "securitySchemes": {
        "petstore_auth": {
          "type": "oauth2",
          "flows": {
            "implicit": {
              "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
              "scopes": {
                "write:pets": "modify pets in your account",
                "read:pets": "read your pets"
              }
            }
          }
        },
        "api_key": {
          "type": "apiKey",
          "name": "api_key",
          "in": "header"
        }
      }
    }
  }

module.exports = swaggerDoc;