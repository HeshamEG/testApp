/* eslint-disable react-hooks/rules-of-hooks */
import React  from "react";
import { observer } from "mobx-react"
import { useMst } from "../../../models/Root";
import Card from "../../../components/Card"
import { ListWrapper } from "./styled"
import { SideText } from '../../../components/shared/Text';
import Loading from '../../../components/Loading';
interface Props { isLoading?: boolean }
interface Item {
  id: string
}
const List: React.FC<Props> = observer((props) => {
  const { TodoListsPagination } = useMst();

  const setCheck = ( item: any) => {
    console.log(item)
    TodoListsPagination.doCheck(item,!item.completed)
  }
  return (
    <ListWrapper >
      <SideText> {`${'total list :' + TodoListsPagination.list.length}`}</SideText>
      {TodoListsPagination.list.map((item, index) => <Card withCheck={true} checked={() => setCheck(item)} completed={item.completed} key={index} title={item.title} id={item.id} />)}
      {TodoListsPagination.isLoading && <Loading type="ThreeDots" />}
    </ListWrapper>
  );
});

export default List;
