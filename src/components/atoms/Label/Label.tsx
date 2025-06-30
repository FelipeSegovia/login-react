import type { CSSProperties, PropsWithChildren } from 'react'

type LabelProps = PropsWithChildren<{
  as: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  id?: string
}>

const Label: React.FC<LabelProps> = ({
  children,
  as: Component = 'span',
  className = '',
  id,
}) => {
  const variantType: Record<LabelProps['as'], CSSProperties> = {
    p: { fontSize: '16px', fontWeight: 'normal', color: '#333333' },
    span: { fontSize: '14px', fontWeight: 'normal', color: '#333333' },
    h1: { fontSize: '32px', fontWeight: 'bold', color: '#333333' },
    h2: { fontSize: '28px', fontWeight: 'bold', color: '#333333' },
    h3: { fontSize: '24px', fontWeight: 'bold', color: '#333333' },
    h4: { fontSize: '20px', fontWeight: 'bold', color: '#333333' },
    h5: { fontSize: '18px', fontWeight: 'bold', color: '#333333' },
    h6: { fontSize: '16px', fontWeight: 'bold', color: '#333333' },
  }

  return (
    <Component style={variantType[Component]} className={className} id={id}>
      {children}
    </Component>
  )
}

export default Label
