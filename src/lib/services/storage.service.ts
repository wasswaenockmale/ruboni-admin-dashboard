import { storage } from "@/appwrite/appwrite";
import { ID } from "appwrite";

export class Storage{
  public async createFile(
    bucketId: string,
    file: any,
    permissions: string[] = []
  ) {
    try {
      return await storage.createFile(bucketId, ID.unique(), file, permissions);
    } catch (error) {
      throw error;
    }
  }

  public async deleteFile(bucketId: string, fileId: string) {
    try {
      return await storage.deleteFile(bucketId, fileId);
    } catch (error) {
      throw error;
    }
  }

  public getFileforView(bucketId: string, fileId: string) {
    try {
      return storage.getFileView(bucketId, fileId);
    } catch (error) {
      throw error;
    }
  }
}