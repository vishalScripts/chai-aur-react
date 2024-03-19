import React from "react";
import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }


  //* So this function is for creating the account  */
  async createAccount({ email, password, name }) {
    try {
      //* this is appwrite method if accout will be created userAccount will be if not userAccount will be false
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      // * if userAccount will be true(created) so then it will login if false then it will return false cause userAccount is not crated so it will return false 
      if (userAccount) {
        // Then login the user
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login ({email, password}){
    try {
      return await this.account.createEmailPasswordSession(email , password)
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser(){
    try {
      return this.account.get()
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
  }

  async logout(){
    try {
      // ! its deleteSessions not deleteSession if you use deleteSession you have to give session id 
      return this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite serive :: logout :: error", error);
    }
  }
}

const authService = new AuthService()

export default authService