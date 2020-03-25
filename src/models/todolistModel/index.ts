import { types, flow, getSnapshot } from "mobx-state-tree";
import { TodoApi as todoApi } from '../../api';
import { ListItem } from './model';
export const TodoListsPagination = types
  .model({
    list: types.optional(types.array(ListItem), []),
    isLoading: types.boolean,
    _start: types.string,
    _limit: types.string
  })
  .actions(self => {
    function updateList(newItems: any) {
      let concatList = self.list.concat(newItems);
      self.list.replace(concatList.slice())
      self.isLoading = false;

    }

    const fetchList = flow(function* () {
      try {
        self._start = self.list.length.toString();
        if (!self.isLoading || self.list.length === 0) {
          self.isLoading = true;
          const data = yield todoApi.getToDoList(self._limit, self._start);
          updateList(data.data);
        }
      } catch (error) {
        console.error("Failed ", error);
      }
      return self.list
    });
    const doCheck = flow(function* (item: any, check: boolean) {
      item.completed = check;
      const data = yield todoApi.checkToDo(item);
      try {
        if (data) {
          let snap = getSnapshot(self.list)
          console.log(snap, data)
        }
      } catch (error) {
        console.error("Failed ", error);
      }

    })
    return { updateList, fetchList, doCheck }
  })



