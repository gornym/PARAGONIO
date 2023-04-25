migrate((db) => {
  const collection = new Collection({
    "id": "f7nt1h2k13kxt29",
    "created": "2023-04-24 21:22:25.204Z",
    "updated": "2023-04-24 21:22:25.204Z",
    "name": "item",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwkxocqj",
        "name": "text",
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
        "id": "fnchnecm",
        "name": "list",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "qurake3zmttk1qt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "6bbr6mcy",
        "name": "done",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("f7nt1h2k13kxt29");

  return dao.deleteCollection(collection);
})
