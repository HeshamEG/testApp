
import React from "react";
import { Text } from "../shared/Text"
import { CardWrapper, Head, Body } from './styled'


interface Props {
  title: string;
  body?: string;
  completed?: boolean;
  checked?: any;
  withCheck: boolean
  id: number;
}

const Card: React.FC<Props> = ({
  title,
  body,
  completed,
  checked,
  withCheck,
  id
}) => {

  return (
    <>
      <CardWrapper>
        <Head>
          <Text value={id} />&nbsp; &nbsp;<Text value={title} />
      &nbsp;
      {withCheck && <input type="checkbox" checked={completed} onChange={(e) => { checked() }} />}
        </Head>
        <Body>
          {body && <Text value={body} />}
        </Body>
      </CardWrapper>
    </>
  );
};

export default Card;
