export default interface IStorable {

    convertToString(): string;
    convertFromString(object: string): any;

}