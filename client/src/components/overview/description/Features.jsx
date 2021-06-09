import React from 'react'
import style from '../MainOverview.module.css'

const Features = ({prod}) => {


// create checkmarks before each feature
return (
    <div>
        <div className={style.features}>
            {prod &&
            prod.features.map((item) => (
                item.feature + " "
            ))}
        </div> 
    </div>
)

}

export default Features