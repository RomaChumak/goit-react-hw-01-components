import { StatItem } from "./QuizStatList.styled"
import { StatList } from "./QuizStatList.styled"
import { StatBoldText } from "./QuizStatList.styled"
import PropTypes from 'prop-types'

export const QuizStatList = ({ stats }) => {
    return <StatList>{stats.map(item => {
         return <StatItem key={item.id}>
                <span>{item.label}</span>
                <StatBoldText>{item.percentage}%</StatBoldText>
            </StatItem>
        })}
    </StatList>
}


QuizStatList.propTypes = {
    users: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }).isRequired,
};