import './Table.scss'

export default function TableItem(props: { children?: React.ReactNode, align?: 'left' | 'center' | 'right' }) {
    return (
        <td className='tableItem' style={{ textAlign: props.align || 'left' }}>
            {props.children}
        </td>
    )
}