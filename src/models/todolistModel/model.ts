import { types } from "mobx-state-tree";

export const ListItem = types
    .model({
        userId: types.number,
        id: types.number,
        title: types.string,
        completed: types.boolean
    });
