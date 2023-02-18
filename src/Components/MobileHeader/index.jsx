import React from 'react'
import Top from './Top'
import { Search } from './Search';
import {Container} from '../../Global/components'
import Tabs from './Tabs';


const MobileHeader = () => {
  return (
    <Container>
        <Top/>
        <Search/>
        <Tabs/>
    </Container>
  )
}

export default MobileHeader