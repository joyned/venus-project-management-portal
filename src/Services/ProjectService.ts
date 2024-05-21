import TableData from "../Models/TableData"

const getProjects = async (pageNum: number = 1): Promise<TableData> => {
    const response = await fetch('temp-projects.json');
    const data: TableData[] = await response.json();
    const pageData: TableData | undefined = data.find(data => data.currPage === pageNum);

    if (!pageData) {
        throw new Error("Page data not found.");
    }

    return pageData;
}

export {
    getProjects
}