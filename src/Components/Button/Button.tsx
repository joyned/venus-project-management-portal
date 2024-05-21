import { CSSProperties } from 'react';
import './Button.scss';

export enum ButtonStatus {
    Default = '',
    Success = 'success',
    Danger = 'danger',
    Warning = 'warning',
    Info = 'info',
    Transparent = 'transparent',
}

export default function Button(props: { label?: string, onClick?: any, status?: ButtonStatus, icon?: any, style?: CSSProperties, }) {
    return (
        <div className="venusButton">
            <button onClick={props.onClick} className={`button ${props.status || ''}`} style={props.style}>
                {props.label}
            </button>
        </div>
    );
}