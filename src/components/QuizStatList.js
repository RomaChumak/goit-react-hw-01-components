export const QuizStatList = ({ stat }) => {
    return <ul>
        {stat.map(item => {
            <li key={item.id}>
                <span>{item.label}</span>
                <span>{item.percentage}%</span>
            </li>
        })}
    </ul>
}