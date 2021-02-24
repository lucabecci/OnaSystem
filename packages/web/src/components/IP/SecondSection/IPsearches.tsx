import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { IIPinformationGet } from "../../../interfaces/IPinterfaces";

interface Props {
    searchs: IIPinformationGet[];
}

function IPsearches(props: Props) {
    const Table = styled.table`
        border: 2px solid #7f5af0;
        border-collapse: collapse;
        width: 100%;
    `;
    const Tr = styled.tr``;

    const Th = styled.th`
        border: 1px solid #7f5af0;
        color: #fffffe;
        font-size: 18px;
        font-weight: 600;
        padding: 4px;
        @media (max-width: 900px) {
            font-size: 10px;
            padding: 3px;
        }
    `;
    const Td = styled.td`
        border: 2px solid #7f5af0;
        color: #fffffe;
        font-size: 12px;
        font-weight: 300;
        padding: 4px;
        @media (max-width: 900px) {
            font-size: 10px;
            padding: 3px;
        }
    `;

    return (
        <Fragment>
            <Table>
                <thead>
                    <Tr>
                        <Th>IP</Th>
                        <Th>LA</Th>
                        <Th>LO</Th>
                        <Th>CO</Th>
                        <Th>ORG</Th>
                    </Tr>
                </thead>
                <tbody>
                    {props.searchs.map((search: any) => (
                        <Tr key={search._id}>
                            <Td>{search.ip}</Td>
                            <Td>{search.lat}</Td>
                            <Td>{search.lon}</Td>
                            <Td>{search.country}</Td>
                            <Td>{search.org}</Td>
                        </Tr>
                    ))}
                </tbody>
                <tfoot></tfoot>
            </Table>
        </Fragment>
    );
}

export default IPsearches;
