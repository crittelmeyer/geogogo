// import { Main } from 'components/layout'

import dynamic from 'next/dynamic'

const Main = dynamic(() => import('components/layout/Main'))

const Test = () => <Main>{'Test'}</Main>

export default Test
