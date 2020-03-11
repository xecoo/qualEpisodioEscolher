import { EncryptDataSource } from './../../business/dataSource/cryptography/encryptDataSource';
import * as bcrypt from 'bcrypt';

export class BcryptService implements EncryptDataSource {
    private static BCRYPT_SALT_ROUNDS = 10;

    async encrypt(word:String): Promise<string> {
        const salt = await bcrypt.genSalt(BcryptService.BCRYPT_SALT_ROUNDS);
        const hash = await bcrypt.hash(word,salt);
        return hash
    }

    async compare(word:string,hash:string):Promise<boolean> {
        const compare = await bcrypt.compare(word,hash);
        return compare;
    }
}