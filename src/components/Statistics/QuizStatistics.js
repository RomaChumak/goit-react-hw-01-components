import { QuizStatList } from './QuizStatList'
import { StatTitle } from './Statistucs.styled'
import { Section } from './Statistucs.styled'
export const Statistics = ({stats, title}) => {
 return (  <Section>
    {title ? <StatTitle>{title}</StatTitle> : ''}
        <QuizStatList stats={stats} />
    </Section>)
}