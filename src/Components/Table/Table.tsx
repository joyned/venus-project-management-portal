import { ReactElement, useState } from 'react';
import { GrNext, GrPrevious } from "react-icons/gr";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import './Table.scss';

export default function Table(props: { children?: ReactElement[], headers?: string[], numOfPages?: number, pageCallback?: (page: number) => void }) {
    const [currentPage, setCurrentPage] = useState<number>(1);

    return (
        <div className="venusTable">
            <table>
                <thead>
                    <tr>
                        {props.headers && props.headers.map((header, index) => <th key={index}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
            {props.numOfPages && props.numOfPages > 1 && (
                <div className="venusTablePaginate">
                    <div className="first">
                        <BiFirstPage onClick={() => {
                            setCurrentPage(1);
                            props.pageCallback && props.pageCallback(1);
                        }} />
                    </div>
                    <div className="prev">
                        <GrPrevious onClick={() => {
                            if (currentPage > 1) {
                                setCurrentPage(currentPage - 1);
                                props.pageCallback && props.pageCallback(currentPage - 1);
                            }
                        }}></GrPrevious>
                    </div>
                    <div className="page">
                        {new Array(props.numOfPages).fill(0).map((_, index) =>
                            <span key={index}
                                className={currentPage === index + 1 ? 'active' : ''}
                                onClick={() => {
                                    setCurrentPage(index + 1);
                                    props.pageCallback && props.pageCallback(index + 1);
                                }}>
                                {index + 1}
                            </span>
                        )}
                    </div>
                    <div className="next">
                        <GrNext onClick={() => {
                            if (currentPage < (props.numOfPages ?? 0)) {
                                setCurrentPage(currentPage + 1);
                                props.pageCallback && props.pageCallback(currentPage + 1);
                            }
                        }}></GrNext>
                    </div>
                    <div className="last">
                        <BiLastPage onClick={() => {
                            setCurrentPage(props.numOfPages ?? 0);
                            props.pageCallback && props.pageCallback(props.numOfPages ?? 0);
                        }} />
                    </div>
                </div>
            )}
        </div>
    );
}