import React from 'react'

//style
import styled from 'styled-components';
import { P } from '../../../../RelatedProduct/Card/style';
const TableStyle=styled.table`
    border:1px solid #E0E7E9;
    width:50%;
    border-collapse: collapse;
    td{
    border:1px solid #E0E7E9;

    padding:10px;
    }
    .firstColumn{
        background: #EFF2F4;
    }
`
export default function Table() {
    return (
        <div>
            <TableStyle>
                <tbody>
                <tr>
                    <td className='firstColumn'><P style={{margin:'0'}}>Model</P></td>
                    <td><P style={{margin:'0'}}>#8786867</P></td>
                </tr>
                <tr>
                    <td className='firstColumn'><P style={{margin:'0'}}> Style</P></td>
                    <td><P style={{margin:'0'}}> Classic style</P></td>
                </tr>
                <tr>
                    <td className='firstColumn'><P style={{margin:'0'}}> Certificate</P></td>
                    <td><P style={{margin:'0'}}> ISO-898921212</P></td>
                </tr>
                <tr>
                    <td className='firstColumn'><P style={{margin:'0'}}> Size</P></td>
                    <td><P style={{margin:'0'}}> 34mm x 450mm x 19mm</P></td>
                </tr>
                <tr>
                    <td className='firstColumn'><P style={{margin:'0'}}> Memory</P></td>
                    <td><P style={{margin:'0'}}> 36GB RAM</P></td>
                </tr>
                </tbody>
            </TableStyle>
        </div>
    )
}
