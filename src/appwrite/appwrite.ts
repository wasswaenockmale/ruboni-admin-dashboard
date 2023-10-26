import appConfig from "@/conf/appConfig";
import { ID, Client, Account, Databases, Storage } from 'appwrite';
import { CreateUserAccount, LoginUserAccount } from "@/types/appwrite";

const appwriteClient = new Client();


appwriteClient.setEndpoint(appConfig.appwriteUrl)
  .setProject(appConfig.appwriteProjectID);

const account = new Account(appwriteClient);
const database = new Databases(appwriteClient);
const storage = new Storage(appwriteClient);

export { account, database, storage}