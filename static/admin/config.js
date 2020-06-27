module.exports = {
    "backend": {
      "name": "git-gateway",
      "branch": "master"
    },
    "media_folder": "static/img",
    "public_folder": "/img",
    "collections": [
      {
        "name": "pages",
        "label": "Pages",
        "label_singular": "Page",
        "folder": "docs",
        "create": true,
        "nested": {
          "depth": 100
        },
        "meta": {
          "path": {
            "widget": "string",
            "label": "Path",
            "index_file": "index"
          }
        },
        "fields": [
          {
            "label": "Title",
            "name": "title",
            "widget": "string"
          },
          {
            "label": "Sidebar Label",
            "name": "sidebar_label",
            "widget": "string"
          },
          {
            "label": "Body",
            "name": "body",
            "widget": "markdown"
          }
        ]
      }
    ]
  }