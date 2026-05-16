---
title: who is this
description: this is me
date: 2026-05-16
image: src/ssets/blog/wallpaperflare.com_wallpaper (1).jpg
---
# Hello good people. How are you doing ? i am fine.

> Hello good people. How are you doing ? i am fine.

Hello good people. How are you doing ? i am fine.

Hello good people. How are you doing ? i am fine.

This is an image

![](src/ssets/blog/debit-credit-analysis1.webp)


| details | debit | credit |
| ---------- | ----- | ------ |
| liabilties | 2311 | dff |
|  |  |  |


```
backend:
  name: git-gateway
  branch: main
media_folder: "public/assets/uploads"
public_folder: "/assets/uploads"
collections:
  - name: "articles"
    label: "Article"
    folder: "src/articles"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Description", name: "description", widget: "markdown" }
      - { label: "Author ", name: "author", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Category", name: "tags", widget: "list", default: ["post"] }
      - { label: "Featured Image", name: "image", widget: "image" }
      - { label: "Image caption", name: "imageAlt", widget: "string" }
      - { label: "Body", name: "body", widget: "markdown" }
```

