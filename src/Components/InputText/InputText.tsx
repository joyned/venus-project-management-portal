import { ReactElement } from 'react';
import './InputText.scss'

export default function InputText(props: { onChange?: any, value?: string, placeholder?: string, style?: any, icon?: ReactElement }) {
    return (
        <div className="venusInputText" style={props.style}>
            {props.icon && (
                props.icon
            )}
            <input onChange={props.onChange} value={props.value} placeholder={props.placeholder} />
        </div>
    );
}