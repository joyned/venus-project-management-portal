import './Table.scss';
import { ReactElement } from "react";

export default function TableBody(props: { children?: ReactElement[] }) {
    return (
        <tr>
            {props.children}
        </tr>
    );
}