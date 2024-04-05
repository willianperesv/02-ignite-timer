import { HandPalm, Play } from "phosphor-react";


import { useEffect, useState } from "react";


import {
    HomeContainer,
    StartCountdownButton,
    StopCountdownButton,
} from "./styles";

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";






export function Home() {

    interface Cycle {
        id: string,
        task: string,
        minutesAmount: number,
        startDate: Date,
        interruptedDate?: Date,
        finishedDate?: Date,
    }

    const [cycles, setCycles] = useState<Cycle[]>([]);
    const [activeCycleId, setActiveCycledId] = useState<string | null>(null);




    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  





    function handleCreateNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime());

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        setCycles((state) => [...state, newCycle]);
        setActiveCycledId(id);
        setAmountSecondsPassed(0);
        reset();
    }

    function handleInterruptCycle () {
       
        setCycles( (state) =>
            state.map( (cycle) => {
            if(cycle.id == activeCycleId){
                return {...cycle, interruptedDate: new Date()}
            }else{
                return cycle
            }
        }));

        setActiveCycledId(null);
    }


   
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmout = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmout).padStart(2, '0')

    useEffect(() => {
        if (activeCycle) {
            document.title = `${minutes} : ${seconds}`
        }

    }, [minutes, seconds, activeCycle])

    const task = watch('task')
    const isSubmitDisabled = !task;

    console.log(cycles)


    // Modo Controlled
    //const [task, setTask] = useState('');

    // function resetForm(){
    //     setTask('');
    // }


    // A função register retorna varios eventos nativos de javascript

    /* function register(name:string, ){
        return{
            onChange: () => void,
            onBlur: () => void,
            onFocus: () =>void
        }
    }*/

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
               <NewCycleForm />
               <Countdown activeCycle={activeCycle} setCycles={setCycles} activeCycleId={activeCycleId}/>
       

                {activeCycle ? (
                    <StopCountdownButton onClick={handleInterruptCycle} type="button">
                        <HandPalm size={24} /> Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play size={24} /> Começar
                    </StartCountdownButton>
                )}

            </form>

        </HomeContainer>
    )
}