import { StatItem } from "./QuizStatList.styled"
import { StatList } from "./QuizStatList.styled"
import { StatBoldText } from "./QuizStatList.styled"

export const QuizStatList = ({ data }) => {
    return <StatList>{data.map(item => {
         return <StatItem key={item.id}>
                <span>{item.label}</span>
                <StatBoldText>{item.percentage}%</StatBoldText>
            </StatItem>
        })}
    </StatList>
}
