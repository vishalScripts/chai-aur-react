import React from "react";
import conf from "../conf/conf";
import {Client, Databases, Storage,ID} from "appwrite"

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteProjectId)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  // * this is for creating document in the database
  // ! IMPORTANT:- slug is the id of this post
  async createPost({ title, content, featuresImage, userId, slug, status }) {
    try {
      const post = await this.databases.createDocument(
        conf.appwriteUrl,
        conf.appwriteProjectId,
        slug,
        {
          title,
          content,
          featuresImage,
          status,
          userId,
        }
      );

      if (post) {
        // show the post
        return post;
      } else {
        return post;
      }
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuresImage, status }) {
    try {
      const updated = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuresImage,
          status,
        }
      );
      if (updated) {
        // show the post that has been updated
        return updated;
      } else {
        return updated;
      }
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      const deleted = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      if (deleted) {
        // get to the home page
        return deleted;
      } else {
        return deleted;
      }
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
    }
  }

  async getPost(slug){
    try {
      return this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug)
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false
    }
  }

  async getPosts(){
    try {
      return this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId)
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false
    }
  }

  // Bucket

  async uploadFile(file) {
    try {
      return this.bucket.updateFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("Appwrite serive :: UpdateFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deleteFile :: error", error);
      return false;
    }
  }

  async getFilePreview(fileId){
    try {
      return  this.bucket.getFilePreview(conf.appwriteBucketId, fileId)
    } catch (error) {
      console.log("Appwrite serive :: GetFilePreview :: error", error);
    }
  }
}