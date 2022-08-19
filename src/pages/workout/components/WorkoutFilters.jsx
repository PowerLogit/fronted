import { SORT_OPTION } from '../libs/constant/workoutSortOption'
import style from './WorkoutFilters.module.css'

const WorkoutFilters = ({ sortBy, setSortBy, slot }) => {
    return (
        <div className={style.wrapper}>
            <select
                value={sortBy}
                onChange={(ev) => setSortBy(Number(ev.target.value))}
            >
                <option value={SORT_OPTION.DEFAULT}>Por defecto</option>
                <option value={SORT_OPTION.DATE_DESC}>Descendente</option>
            </select>
            {slot}
        </div>
    )
}

export default WorkoutFilters
