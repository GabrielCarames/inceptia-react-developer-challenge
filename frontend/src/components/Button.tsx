import { ButtonProps } from "../types/interfaces"

export default function Button({
  className,
  children,
  props,
  type
}: ButtonProps) {
  return (
    <button
      className={className}
      {...props}
      type={type}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {children}
    </button>
  )
}
