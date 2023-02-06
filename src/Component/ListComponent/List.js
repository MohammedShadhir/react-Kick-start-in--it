import React from 'react'
import '../ListComponent/List.css'


function List(props) {

    return (
        <div className={
            props.obj.completed && "completed"
        }>
            <div className='main'>
                <p> {
                    props.obj.name
                } </p>
                <p> {
                    props.obj.date
                } </p>
                <p> {
                    props.obj.select
                } </p>
                <button onClick={
                    () => props.onDone(props.obj)
                }>Mark as done</button>
                <button onClick={
                    () => props.onDeleted(props.obj)
                }>Delete</button>

            </div>


        </div>
    )
}

export default List
