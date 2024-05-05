import { Field } from "react-final-form"

export type Props = {
  id: string
  inputName: string
  inputType?: "text" | "number" | "password"
  withHeading?: boolean
}

const FormInput = ({
  id,
  inputName,
  inputType = "text",
  withHeading = true,
}: Props) => {
  return (
    <label htmlFor={id}>
      <Field name={id}>
        {({ input, meta, onChange }) => (
          <div>
            <div className="mb-2 flex justify-between">
              {withHeading && (
                <h3 className={meta.error ? "text-red" : "text-white"}>
                  {inputName}
                </h3>
              )}
              {meta && meta.error && meta.touched && (
                <span className="text-red text-[10px]">{meta.error}</span>
              )}
            </div>
            <input
              {...input}
              type={inputType}
              className={`h-12 w-[324px] rounded-[4px] border-solid border-[#727272] bg-black pl-3 font-medium text-white
               placeholder:text-[#a7a7a7] hover:border-white focus:border-2 focus:border-white focus:ring-0 ${meta.error ? "border-red" : ""} `}
              placeholder={inputName}
              onChange={(e) => {
                input.onChange(e) //final-form's onChange
                if (onChange) {
                  //props.onChange
                  onChange(e)
                }
              }}
            />
          </div>
        )}
      </Field>
    </label>
  )
}

export default FormInput
