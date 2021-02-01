import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { IIPinformationGet } from '../../../interfaces/IPinterfaces'

interface Props {
    search: IIPinformationGet
}

function IPsearches(props: Props) {
    

    const Table = styled.table`
        border: 2px solid #7f5af0;
        border-collapse: collapse;
        width: 100%;  
    `
    const Tr = styled.tr`
    `

    const Th = styled.th`
        border: 1px solid #7f5af0;
        color: #fffffe;
        font-size: 15px;
        font-weight: 300;
        @media (max-width: 900px) {
            font-size: 10px;
        }
    `
    const Td = styled.td`
        border: 1px solid #7f5af0;
        color: #fffffe;
        font-size: 13px;
        font-weight: 300;
        @media (max-width: 900px) {
            font-size: 10px;
        }
    `

    return (
        <Fragment>
            <Table>
                <thead>
                    <Tr>
                        <Th>IP</Th>
                        <Th>LATITUDE</Th>
                        <Th>LONGITUDE</Th>
                        <Th>COUNTRY NAME</Th>
                        <Th>ORG</Th>
                    </Tr>
                </thead>
                    <tbody>
                        <Tr>
                            <Td>{props.search.ip}</Td>
                            <Td>{props.search.lat}</Td>
                            <Td>{props.search.lon}</Td>
                            <Td>{props.search.country}</Td>
                            <Td>{props.search.org}</Td> 
                        </Tr>
                    </tbody>
                <tfoot></tfoot>
            </Table>
        </Fragment>
    )
}

export default IPsearches
