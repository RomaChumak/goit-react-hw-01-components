import { QuizStatList } from './QuizStatList'
import { StatTitle } from './Statistucs.styled'
import { Section } from './Statistucs.styled'
import PropTypes from 'prop-types'
export const Statistics = ({stats, title}) => {
 return (  <Section>
    {title && <StatTitle>{title}</StatTitle>}
        <QuizStatList stats={stats} />
    </Section>)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};