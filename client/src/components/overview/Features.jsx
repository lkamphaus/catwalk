import React from 'react'

const Features = ({prod}) => {


// create checkmarks before each feature
return (
    <div>
        <div>
            {prod &&
            prod.features.map((item) => (
                item.feature + " "
            ))}
        </div>
    </div>
)

}

export default Features