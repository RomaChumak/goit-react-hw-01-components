import { StatItem } from "./QuizStatList.styled"
import { StatList } from "./QuizStatList.styled"
import { StatBoldText } from "./QuizStatList.styled"

export const QuizStatList = ({ stats }) => {
    return <StatList>{stats.map(item => {
         return <StatItem key={item.id}>
                <span>{item.label}</span>
                <StatBoldText>{item.percentage}%</StatBoldText>
            </StatItem>
        })}
    </StatList>
}
