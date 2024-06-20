import { Input } from '@/components/ui/input'

type Props = {
   id: string,
   type: string,
   placeholder: string,
   required: boolean,
   pattern: string,
   title: string
}

export const FormInput = ({ id, type, placeholder, required, pattern, title}: Props) => {
  return (
   <Input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      pattern={pattern}
      title={title}
   />
  )
}
