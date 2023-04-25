migrate((db) => {
  const collection = new Collection({
    "id": "qurake3zmttk1qt",
    "created": "2023-04-24 20:56:40.477Z",
    "updated": "2023-04-24 20:56:40.477Z",
    "name": "paragonio",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jabk4tx9",
        "name": "zdjecia_paragonow",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "xqindscl",
        "name": "data_zakupow",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "xc3agxks",
        "name": "kwota",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "pur7cj54",
        "name": "nazwa_sklepu",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xywt4pgd",
        "name": "kategoria_zakupow",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qurake3zmttk1qt");

  return dao.deleteCollection(collection);
})
