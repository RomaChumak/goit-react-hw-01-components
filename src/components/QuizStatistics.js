import data from '../data.json'
import {QuizStatList} from './QuizStatList'
export const Statistics = () => {
 return (  <section>
    <h2>Upload stats</h2>
        <QuizStatList data={data} />
    </section>)
}