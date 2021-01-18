import React, { Fragment, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { getAllIP } from '../../../services/IPServices'
import { IIPinformationGet } from '../../../interfaces/IPinterfaces'
function IPsearches() {
    const [searches, setSearches] = useState<IIPinformationGet[]>([] as IIPinformationGet[])

    useEffect(() => {
        async function getData(){
            const result = await getAllIP('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZjIyZjliMzhkY2RmMzU4OTQxZDZlYyIsImlhdCI6MTYxMDk1NjE3M30.pRUgvMbkPMUby8uSlE0WJ8ZP7Zq-svrlgYuRrRJCoTA')
            setSearches(result.data)
        }
        getData()
    }, [])

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
        font-weight: 400;
        @media (max-width: 900px) {
            font-size: 10px;
        }
    `
    const Td = styled.td`
        border: 1px solid #7f5af0;
        color: #fffffe;
        font-size: 13px;
        font-weight: 400;
        @media (max-width: 900px) {
            font-size: 10px;
        }
    `

    return (
        <Fragment>
            <Table>
                <Tr>
                    <Th>IP</Th>
                    <Th>LATITUDE</Th>
                    <Th>LONGITUDE</Th>
                    <Th>POSTAL</Th>
                    <Th>COUNTRY NAME</Th>
                    <Th>ORG</Th>
                </Tr>
                {
                    searches.map((s: IIPinformationGet) => (
                       <Tr key={s._id}>
                            <Td>{s.ip}</Td>
                            <Td>{s.lat}</Td>
                            <Td>{s.lon}</Td>
                            <Td>{s.postal}</Td>
                            <Td>{s.country}</Td>
                            <Td>{s.org}</Td>
                       </Tr>
                    ))
                }
            </Table>
        </Fragment>
    )
}

export default IPsearches
