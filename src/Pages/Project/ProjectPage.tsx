import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegEdit } from "react-icons/fa";
import Button, { ButtonStatus } from '../../Components/Button/Button';
import InputText from '../../Components/InputText/InputText';
import Table from '../../Components/Table/Table';
import TableBody from '../../Components/Table/TableBody';
import TableItem from '../../Components/Table/TableItem';
import Layout from '../../Layout/Layout';
import { getProjects } from '../../Services/ProjectService';
import './ProjectPage.scss';
import TableData from '../../Models/TableData';

export default function ProjectPage() {
    const [projects, setProjects] = useState<TableData>({ numOfPages: 0, currPage: 1, data: [] });

    useEffect(() => {
        getProjects().then((data: any) => {
            setProjects(data);
        });
    }, [])

    const paginate = (pageNum: number) => {
        getProjects(pageNum).then((data: any) => {
            setProjects(data);
        });
    }

    return (
        <Layout>
            <div className="projectPage">
                <div className="pageTitle">
                    <h1>Projects</h1>
                    <div className="pageTitleButton">
                        <Button label='Create'></Button>
                        <Button label='Template' status={ButtonStatus.Transparent}></Button>
                    </div>
                </div>
                <form className='filterForm'>
                    <InputText placeholder='Search Projects'
                        icon={<CiSearch />}
                        style={{ width: '200px' }}
                    ></InputText>
                    <Button label='Filter'></Button>
                </form>
                <Table headers={['Project', 'Contact', 'Actions']}
                    numOfPages={projects.numOfPages}
                    pageCallback={(pageNum: number) => paginate(pageNum)}>
                    {projects.data.map((data: any, index) => (
                        <TableBody key={index}>
                            <TableItem>{data.projectName}</TableItem>
                            <TableItem>{data.contact}</TableItem>
                            <TableItem><FaRegEdit /> </TableItem>
                        </TableBody>
                    ))}
                </Table>
            </div>
        </Layout>
    );
}