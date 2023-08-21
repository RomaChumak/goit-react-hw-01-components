export const QuizStatList = ({ data }) => {
    return <ul>{data.map(item => {
         return <li key={item.id}>
                <span>{item.label}</span>
                <span>{item.percentage}%</span>
            </li>
        })}
    </ul>
}
