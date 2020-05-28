import { IPasswordStore } from '@jolocom/sdk/js/src/lib/storage';
export declare class KeyChain implements IPasswordStore {
    private username;
    private nativeLib;
    savePassword(password: string): Promise<void>;
    getPassword(): Promise<string>;
}
