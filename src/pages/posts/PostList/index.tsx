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
  const { PostListPagination } = useMst();

  return (
    <ListWrapper >

      <SideText> {`${'total list :' + PostListPagination.list.length}`}</SideText>
      {PostListPagination.list.map((item, index) => <Card withCheck={false} body={item.body}  key={index} title={item.title} id={item.id} />)}
      {PostListPagination.isLoading && <Loading type="ThreeDots" />}
    </ListWrapper>
  );
});

export default List;
