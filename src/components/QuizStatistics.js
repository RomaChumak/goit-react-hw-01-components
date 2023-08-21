import data from '../data.json'
import {QuizStatList} from './QuizStatList'
export const Statistics = () => {
    <section>
          <h2>Upload stats</h2>
        <QuizStatList stat={data} />
    </section>
}