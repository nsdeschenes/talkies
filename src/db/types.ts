import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
    ? ColumnType<S, I | undefined, U>
    : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;
export type List = {
    id: Generated<number>;
    name: string;
    userId: number | null;
};
export type ListEntries = {
    id: Generated<number>;
    talkieId: number;
    listId: number;
};
export type Talkie = {
    id: Generated<number>;
    createdAt: Generated<Timestamp>;
    updatedAt: Timestamp;
    title: string;
    summary: string;
};
export type User = {
    id: Generated<number>;
    name: string | null;
    authorId: string;
};
export type DB = {
    List: List;
    ListEntries: ListEntries;
    Talkie: Talkie;
    User: User;
};
