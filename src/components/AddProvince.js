import { useState, useRef } from "react";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import provinces from "../api/provinces";
import { nanoid } from 'nanoid';

function AddProvince({getProvince}) {
    const toast = useToast();
    const form = useRef(null);
    const [province, setProvince] = useState('');
    const [statusInput, setStatusInput] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form  = {
            id: nanoid(),
            name: province
        }

        await provinces
            .addProvince(form)
            .then((res) => {
                if(res.status === true) {
                    toast({ 
                        description: 'Success to add province',
                        position: 'top',
                        status: 'success',
                        duration: 2000
                    })
                };

                if(res.status === false) {
                    toast({ 
                        description: 'Failed to add province',
                        position: 'top',
                        status: 'warning',
                        duration: 2000
                    })
                }

                setStatusInput(false);
                return setProvince('');
            })
            .catch((err) => {
                toast({ 
                    description: 'An error occurred on the server side',
                    position: 'top',
                    status: 'error',
                    duration: 2000
                })
            })

            setProvince('');
        
        getProvince()
    }

    if(province && !statusInput) {
        setStatusInput(true);
    }

    return (
        <HStack mt='4' mb='4'>
            <Input
                h='46'
                borderColor={!statusInput ? 'red.300' : 'transparent'}
                variant='filled'
                placeholder="Name Province"
                name="name"
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                required
            />
            <Button
                colorScheme="blue"
                px='8'
                pl='10'
                pr='10'
                h='46'
                type="submit"
                ref={form}
                onClick={(e) => handleSubmit(e) }
            > Submit
            </Button>
        </HStack>
    )
}

export default AddProvince;