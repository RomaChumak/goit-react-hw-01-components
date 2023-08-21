import { QuizStatList } from './QuizStatList'
import { StatTitle } from './Statistucs.styled'
import { Section } from './Statistucs.styled'
export const Statistics = ({data}) => {
 return (  <Section>
    <StatTitle>Upload stats</StatTitle>
        <QuizStatList data={data} />
    </Section>)
}