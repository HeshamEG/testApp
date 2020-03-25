import { types, flow } from "mobx-state-tree";
import { PostsApi as postsApi } from '../../api';
import { ListItem } from './model';
export const PostListPagination = types
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
                    const data = yield postsApi.getPostsList(self._limit, self._start);

                    updateList(data.data);
                }
            } catch (error) {
                console.error("Failed ", error);
            }
            return self.list
        });

        const submitPost = flow(function* (item: any) {
            item.id = parseInt(item.id)
            item.userId = parseInt(item.userId)
            const data = yield postsApi.submitPost(item);
            try {
                if (data) {
                    self.list.push(item)
                }
            } catch (error) {
                console.error("Failed ", error);
            }

        })
        return { updateList, fetchList, submitPost }
    })



