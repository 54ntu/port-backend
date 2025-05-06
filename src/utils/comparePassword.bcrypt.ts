import * as bcrypt from 'bcrypt';

export const comparedPassword = async (password: string, hashedPassword: string) => {
    const isMatched = await bcrypt.compare(password, hashedPassword);
    if (!isMatched) {
        throw new Error('Password is incorrect');
    }
    return isMatched
}