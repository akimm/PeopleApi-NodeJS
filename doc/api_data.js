define({ "api": [
  {
    "type": "get",
    "url": "/people",
    "title": "Request people",
    "version": "0.0.7",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/people"
      }
    ],
    "name": "getAll",
    "group": "People",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "people",
            "description": "<p>List of people.</p>"
          },
          {
            "group": "Success 200",
            "type": "mongoose.Schema.ObjectId",
            "optional": false,
            "field": "people._id",
            "description": "<p>Unique id given to the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "people.firstName",
            "description": "<p>First Name of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "people.lastName",
            "description": "<p>Last Name of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "people.email",
            "description": "<p>Email of the person</p>"
          }
        ]
      }
    },
    "filename": "app/controllers/peopleController.js",
    "groupTitle": "People"
  },
  {
    "type": "get",
    "url": "/people/:personId",
    "title": "Request Specific Persons information",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/people/567afceccaff7d9c39e1b7ef"
      }
    ],
    "name": "getById",
    "group": "People",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "person",
            "description": "<p>The Person</p>"
          },
          {
            "group": "Success 200",
            "type": "mongoose.Schema.ObjectId",
            "optional": false,
            "field": "person._id",
            "description": "<p>Unique id given to the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "person.firstName",
            "description": "<p>First Name of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "person.lastName",
            "description": "<p>Last Name of the person</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "person.email",
            "description": "<p>Email of the person</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/controllers/peopleController.js",
    "groupTitle": "People"
  }
] });
