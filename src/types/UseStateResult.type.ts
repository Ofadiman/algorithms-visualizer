import { Dispatch, SetStateAction } from 'react'

export type UseStateResult<Type> = [Type, Dispatch<SetStateAction<Type>>]
