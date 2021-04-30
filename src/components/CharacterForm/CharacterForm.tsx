import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
// bringin in chooseName reducer:
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CharacterFormProps {
    // ? means it's an optional parameter
    // if there is an id, it has to be a stringtype. 
    // If there is data, it has to be in an object
    // but won't get an error if either/both are missing 
    id?:string;
    data?:{};
}

interface CharacterState {
    name: string;
    price: string;
}

export const CharacterForm = (props:CharacterFormProps) => {

    const dispatch = useDispatch();
    let { characterData, getData } = useGetData();
    const store = useStore()
    // Selecting current name of the character:
    const name = useSelector<CharacterState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        // When we call our characters by name in this statement above (const name = useSelector<CharacterState>(state => state.name), we should be able to see their ids:
        console.log(props.id)

        // Similar to the ‘?’ Operator meaning “Optional”, the “!” You see here means “not null” or cannot be empty
        // If props.id is not null (if we find something in props.id), I want to update that based on the data passed into the form
        // Else/If it's not there, I'll create a new character using the chooseName reducer
        // Character Update:
        if( props.id!){
            console.log("before update")
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            // window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            // window.location.reload()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    {/* checking for data in name field */}
                    {/* ...spread operator -- Could have one or many elements, and if there are several, I want to run them each through here. In this case, allowing us to register multiple items */}
                    <label htmlFor="name">Character Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>

                <div>
                    <label htmlFor="comics_appeared_in">Comics Appeared In</label>
                    <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In"/>
                </div>

                <div>
                    <label htmlFor="super_power">Super Power</label>
                    <Input {...register('super_power')} name="super_power" placeholder="Super Power"/>
                </div>

                  <Button type='submit'>Submit</Button>
            </form>
        </div>
    )

}
