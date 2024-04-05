import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import * as zod from 'zod';

export function NewCycleForm() {
    const newCycleFormValidationSchema = zod.object({
        task: zod.string().min(1, 'Informe a tarefa'),
        minutesAmount: zod.number().min(1, 'O ciclo precisa ser de no minimo 5 minutos ').max(60, 'O ciclo precisa ser de no máximo 60 minutos '),
    })
    
    // interface NewCycleFormData {
    //     task: string,
    //     minutesAmount: number
    // }
    
    
    //inferindo tipagem atráves do zod
    type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0
        }
    });

    

    return (
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto"
            disabled={!!activeCycle}
            {...register('task')}
        />

        <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
        </datalist>

        <label htmlFor="minutesAmount">durante</label>
        <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            min={1}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
    </FormContainer>
    )
}