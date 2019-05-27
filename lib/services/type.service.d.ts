export declare class TypeService {
    isVoid(value: any): value is void;
    toString(value: any): string | null;
    toNumber(value: any): number | null;
    toBoolean(value: any): boolean | null;
    toDate(value: any): Date | null;
}
