
import { useState, useRef} from 'react';
export const useTimer = (init) => {
    const [countDown, setCountDown] = useState({hrs:"00",mins:"00",secs:"00"})
    const id = useRef()
    const [time,setTime]= useState(init);
    const start =()=>{
        let timer = time
        const thisId = setInterval(()=>{
            timer=timer+1
            setTime(timer)
            const hrs = parseInt(timer / 3600,10)
            const mins = parseInt(timer / 60,10)
            const secs = parseInt(timer % 60,10)
            setCountDown({hrs,mins,secs})
            if(timer<0){
                clear()
            }
        },1000)
        id.current=thisId
    }
    const clear = ()=>{
        clearInterval(id.current)
        setCountDown({hrs:"00",mins:"00",secs:"00"})
        setTime(init)
    }
    const stop = ()=>{
        clearInterval(id.current)
    }
    return {start,stop,clear,countDown}
}
