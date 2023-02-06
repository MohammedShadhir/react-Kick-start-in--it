import React, {useState} from 'react'
import '../FormComponent/Form.css'
import List from '../ListComponent/List';


function Form() {
    const [inputValue, setInputvalue] = useState("");
    const [value, setvalue] = useState([]);
    const [inputdateValue, setInputdateValue] = useState([]);
    const [selectvalue, setselectvalue] = useState([]);
    const updateTodoName = (e) => {
        setInputvalue(e.target.value);
    }
    const updateDate = (e) => {
        setInputdateValue(e.target.value);

    }
    const update = (e) => {
        setselectvalue(e.target.value);
    }
    const OnSubmit = (e) => {
        e.preventDefault();
        const temp = value;
        temp.push({
            name: inputValue,
            date: inputdateValue,
            select: selectvalue,
            piority: selectvalue == 'high' ? 1 : selectvalue == 'medium' ? 2 : 3,
            completed: false
        })
        console.log(temp.sort((x, y) => x < y ? -1 : 1))
        setvalue(temp.sort((x, y) => x.piority < y.piority ? -1 : 1));

        setInputvalue("");
        setInputdateValue("");
        setselectvalue("");

    }
    const onDone = (item) => {

        setvalue([]);
        let newList = value.map(listItem => {
            if (listItem.name === item.name) {
                return {
                    ...listItem,
                    completed: !listItem.completed
                };

            }
            return listItem;

        });
        console.log(item);
        setvalue(newList);


    }
    const onDeleted = item => {
        let newList = value.filter(listItem => {
            if (listItem.name === item.name) {
                return false;

            }
            return true;

        });
        console.log(item);
        setvalue(newList);


    }


    return (
        <div>
            <h1>TODO LIST</h1>
            <form onSubmit={OnSubmit}>
                <input type="text" placeholder='Enter todo'
                    value={inputValue}
                    id='text'
                    onChange={updateTodoName}/>
                <input type="date"
                    value={inputdateValue}
                    id="date"
                    onChange={updateDate}/>
                <select id="dropdown"
                    onChange={update}>
                    <option value="" disabled selected>Select peority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <input type="submit" value="Submit" id='btn'/>

            </form>
            {
            value.map((item) => <List obj={item}
                onDone={onDone}
                onDeleted={onDeleted}/>)
        } </div>
    )
}

export default Form
