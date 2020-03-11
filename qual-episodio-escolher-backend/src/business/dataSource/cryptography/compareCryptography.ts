export interface CryptCompareDataSource {
    compare(word: string, hash: string): Promise<boolean>;
}