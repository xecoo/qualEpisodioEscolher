export interface EncryptDataSource {
    encrypt(word: string): Promise<string>;
}