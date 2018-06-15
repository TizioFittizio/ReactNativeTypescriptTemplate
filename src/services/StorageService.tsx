import { StorageKey } from "../constants";
import { AsyncStorage } from "react-native";
import IStorable from './../common/IStorable';

export default class StorageService {

    private static instance: StorageService;

    private isStorable(object: any): object is IStorable {
        return object.convertToString && object.convertFromString;
    }

    public static getInstance(){
        if (!StorageService.instance){
            StorageService.instance = new StorageService();
        }
        return StorageService.instance;
    }

    public async set(key: StorageKey, item: any): Promise<boolean> {
        try {
            if (typeof item === 'string'){
                await AsyncStorage.setItem(key.toString(), item.toString());
            }
            else if (this.isStorable(item)){
                await AsyncStorage.setItem(key.toString(), item.convertToString());
            }
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }

    public async getString(key: StorageKey): Promise<string | null> {
        try {
            const value = await AsyncStorage.getItem(key.toString());
            if (value !== null){
                return value;
            }
            return null;
        }
        catch (error){
            console.error(error);
            return null;
        }
    }

    public async getObject<T>(key: StorageKey, object: IStorable): Promise<IStorable | null> {
        try {
            const value = await AsyncStorage.getItem(key.toString());
            if (value !== null){
                object.convertFromString(value);
                return object;
            }
            return null;
        }
        catch (error){
            console.error(error);
            return null;
        }
    }

    public async remove(key: StorageKey): Promise<boolean> {
        try {
            await AsyncStorage.removeItem(key.toString());
            return true;
        }
        catch (error){
            console.error(error);
            return false;
        }
    }

}