import {useEffect,useState} from 'react'
import './app-counter.css';

const CurrencyConverter =(props)=>{

    const [value,setValue] = useState(props.value)
    const [list,setList] = useState([])
    const [visibleCurrency,setVisibleCurrency] = useState(['EUR','BGN','USD'])
    const [allCurrency,setAllCurrency] = useState([])

    async function getCurrensy(){
        let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`ERROR ${res}`);
        }
        return await res.json();
    }

    function rewriteList(arr){
        let newList = []
        arr.filter((item)=>{
            visibleCurrency.find(el => {
                if(el === item.cc){
                    newList.push(item)
                }
            })
        })
        setAllCurrency(allCurrency=>arr)
        setList(list=> newList)
    }

    function calculate(val){
        setValue(value=> parseFloat(props.value*val).toFixed(2))
    }
    function getNewCurrency(event){

    }

    useEffect(   ()=>{
        if(list.length){
            return
        }
        getCurrensy()
            .then((res)=> rewriteList(res))
    },[list])

    useEffect(()=>{
        // getNewCurrency()
    },[visibleCurrency])

    return(
        <div className="app">
            <select name="" id="" onChange={(event)=>setVisibleCurrency(visibleCurrency=>[...visibleCurrency,event.target.value])}>
                {
                    allCurrency.map(item=>{
                        return(
                            <option key={item.cc} value={item.cc}>{item.txt}</option>
                        )
                    })
                }

            </select>
            <div className="counter">{value}</div>
            <div className="controls">
                {
                    list.map(item=>{
                        return(
                            <button onClick={()=>calculate(item.rate)} key={item.r030}>{item.cc}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CurrencyConverter