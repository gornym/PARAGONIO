migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qurake3zmttk1qt")

  collection.name = "list"

  // remove
  collection.schema.removeField("jabk4tx9")

  // remove
  collection.schema.removeField("xqindscl")

  // remove
  collection.schema.removeField("xc3agxks")

  // remove
  collection.schema.removeField("pur7cj54")

  // remove
  collection.schema.removeField("xywt4pgd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yugj1bqi",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dicuuuau",
    "name": "userID",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qurake3zmttk1qt")

  collection.name = "paragonio"

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("yugj1bqi")

  // remove
  collection.schema.removeField("dicuuuau")

  return dao.saveCollection(collection)
})
