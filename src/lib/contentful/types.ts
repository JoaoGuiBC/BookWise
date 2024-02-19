import * as contentful from 'contentful'

export type AuthorEntrySkeleton = {
  contentTypeId: 'author'
  fields: {
    name: contentful.EntryFieldTypes.Text
  }
}

export type TagEntrySkeleton = {
  contentTypeId: 'tag'
  fields: {
    title: contentful.EntryFieldTypes.Text
  }
}

export type BookEntrySkeleton = {
  contentTypeId: 'book'
  fields: {
    title: contentful.EntryFieldTypes.Text
    synopsis: contentful.EntryFieldTypes.Text
    cover: contentful.EntryFieldTypes.AssetLink
    author: contentful.EntryFieldTypes.EntryLink<AuthorEntrySkeleton>
    tags: contentful.EntryFieldTypes.Array<
      contentful.EntryFieldTypes.EntryLink<TagEntrySkeleton>
    >
  }
}
