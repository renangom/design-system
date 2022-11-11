import { Children, InputHTMLAttributes, ReactNode } from "react"
import {clsx} from 'clsx'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot({children}:TextInputRootProps){
    return(
        <div className={clsx('flex items-center gap-3 outline-none focus:ring-2 ring-cyan-300 py-4 px-3 w-full rounded bg-gray-800')}>
            {children}
        </div>
    )
}

function TextInputIcon(){

}



export function TextInputInput(props:TextInputProps){
    return(
            <input className="bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400" {...props} />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput
}