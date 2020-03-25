import { useContext, createContext } from "react";
import { types, Instance } from "mobx-state-tree";
import { TodoListsPagination, PostListPagination } from "./"

const RootModel = types.model({
  TodoListsPagination: TodoListsPagination,
  PostListPagination: PostListPagination
});

export const rootStore = RootModel.create({
  TodoListsPagination: { _start: '0', _limit: '10', isLoading: false },
  PostListPagination: { _start: '0', _limit: '10', isLoading: false },
});



export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
