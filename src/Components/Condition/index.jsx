import React from 'react'
import HeadAside from '../HeadAside';
import Radio from './Radio';
export default function Condition() {
    return (
    <div>
        <HeadAside title="Condition"/>
        <Radio title="Any" checked/>
        <Radio title="Refurbished"/>
        <Radio title="Brand new"/>
        <Radio title="Old items"/>
    </div>
    )
}
