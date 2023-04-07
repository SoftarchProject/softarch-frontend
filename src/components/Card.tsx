import { useRef, useState } from 'react'
import reactLogo from '../assets/react.svg'

interface itemProps{
    name?: any,
    price?: any
}

let cart: any = []

export default function Card(itemProps: itemProps = {name: "", price: 0}) {
    let [targetAmount, setTargetAmount] = useState()
    const inputRef = useRef<any>(null)
    
    function handleChange() {
        if (itemProps['name'] != undefined || itemProps['price'] != undefined){
            cart.push({name: itemProps["name"], price: itemProps['price'], total: inputRef.current?.value})
            setTargetAmount(cart)
        }
    }

    console.log(targetAmount)

    return (
        <div className="max-w-sm rounded shadow-lg">
            <img className="w-full" src={reactLogo} />
            <div className='flex flex-col justify-center'>
                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">{itemProps['name']}</div>
                    <p className="text-base text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small input</label>
                    <input name={itemProps['name']} ref={inputRef} type="text" id="small-input" className="block p-2 text-gray-900 border border-gray-300 rounded-lg w-w bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <button type='submit' onClick={handleChange}>Submit</button>
                </div>
            </div>
        </div>
    )
}
