import React, { useState } from "react";
import {
    HStack,
    VStack,
    Text,
    StackDivider,
    IconButton,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import provinces from "../api/provinces";
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import ModalEdit from "./modal/ModalEdit";
import ModalDelete from "./modal/ModalDelete";

const Provinces = ({listProvinces, getProvince}) => {
    const toast = useToast();
    const [data, setData] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();


    const getNameProvince = async (id) => {
        await provinces
            .getProvince(id)
            .then((res) => {
                setData({...data, name: res.data[0].name, id: id })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handleDelete = async (id) => {
        try {
            const deleteData = {
                id_prov: id
            }

            await provinces
                .deleteProvince(deleteData)
                toast({ 
                    description: 'Success to delete province',
                    position: 'top',
                    status: 'success',
                    duration: 2000
                })

                getProvince()
        } catch(err) {
            toast({ 
                description: 'Failed to delete province',
                position: 'top',
                status: 'warning',
                duration: 2000
            })
        } finally {
            onCloseDelete();
        }
    }

    const handleSubmit = async (id, province) => {
        try {
            const dataUpdate = {
                id: id,
                name: province
            }

            await provinces
                .updateProvince(dataUpdate)
                toast({ 
                    description: 'Success to add province',
                    position: 'top',
                    status: 'success',
                    duration: 2000
                })
                getProvince()
        } catch (err) {
            toast({ 
                description: err.response.message,
                position: 'top',
                status: 'error',
                duration: 2000
            })
        } finally {
            onClose()
        }
    }

    return (
        <>
            <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            p='5'
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
            alignItems='stretch'
            >
            
            {listProvinces.map((province) =>(
                <HStack
                key={province.id}
                >
                    <Text
                        w='100%' 
                        p='8px'
                        borderRadius='lg'
                        cursor='pointer'>
                        {province.name}
                    </Text>
                    <IconButton 
                        icon={<FiEdit/>}
                        isRound='true'
                        onClick={() => {
                            onOpen()
                            getNameProvince(province.id)
                        }}
                    />
                    <IconButton
                        icon={<FiTrash2 />}
                        isRound
                        onClick={() => {
                            onOpenDelete()
                            setData({...data, id: province.id})
                        }}
                        />
                </HStack>
            ))}    
        </VStack>
        <ModalEdit 
            isOpen={isOpen}
            onClose={onClose}
            handleSubmit={(id, name) => handleSubmit(id, name)} 
            data={data}
        />
        <ModalDelete 
            isOpen={isOpenDelete}
            onClose={onCloseDelete}
            handleDelete={() => handleDelete(data.id)} 
        />
        </>
    );
}

export default Provinces;