import type { CSSProperties, PropsWithChildren } from 'react'

type LabelProps = PropsWithChildren<{
  as: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  id?: string
}>

const Label: React.FC<LabelProps> = ({
  children,
  as: Component = 'span',
  id,
}) => {
  const variantType: Record<LabelProps['as'], CSSProperties> = {
    p: { fontSize: '16px', fontWeight: 'normal' },
    span: { fontSize: '14px', fontWeight: 'normal' },
    h1: { fontSize: '32px', fontWeight: 'bold' },
    h2: { fontSize: '28px', fontWeight: 'bold' },
    h3: { fontSize: '24px', fontWeight: 'bold' },
    h4: { fontSize: '20px', fontWeight: 'bold' },
    h5: { fontSize: '18px', fontWeight: 'bold' },
    h6: { fontSize: '16px', fontWeight: 'bold' },
  }

  return (
    <Component style={variantType[Component]} className="label" id={id}>
      {children}
    </Component>
  )
}

export default Label
