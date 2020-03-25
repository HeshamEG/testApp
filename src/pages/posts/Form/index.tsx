import React from 'react'
import { useForm } from 'react-hook-form'
import { FormWrapper, InputWrapper } from './styled'
import { useMst } from "../../../models/Root";

const Form: React.FC<any> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <label>userId</label>
        <input type="number" name="userId" ref={register({ required: true })} />
      </InputWrapper>
      <InputWrapper>
        <label>Id</label>
        <input type="text" name="id" ref={register({ required: true })} />
      </InputWrapper>
      <InputWrapper>
        <label>Body</label>
        <input type="text" name="body" ref={register({ required: true })} />
      </InputWrapper>
      <InputWrapper>
        <label>Title</label>
        <input type="textarea"   name="title" ref={register({ required: true })} />
      </InputWrapper>
      <input type="submit" />
      {errors.userId&&errors.id&&errors.title&&errors.body&&<span>This field is required</span>}
    </FormWrapper>
  )
}

export { Form }