import {Client, Account,Databases,Storage,Avatars} from 'appwrite'

export const appwriteConfig = {
    url: import.meta.env.VITE_APPWRITE_URL,
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    databaseId:import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId:import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId:"65ff42e521a22024e456",
    postCollectionId:import.meta.env.VITE_ARRWRITE_POST_COLLOCTION_ID,
    savesCollectionId:import.meta.env.VITE_ARRWRITE_SAVES_COLLOCTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
