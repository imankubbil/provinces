import React, {useState} from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
} from "@chakra-ui/react";

const ModalEdit = ({isOpen, onClose, data, handleSubmit}) => {
  const [provinceName, setProvinceName] = useState('')
  return (
    <Modal
            isCentered
            size="lg"
            isOpen={isOpen}
            onClose={onClose}
            >
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Update Province</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <Input 
                                placeholder='Enter Name Province'
                                defaultValue={data.name}   
                                onChange={(e) => setProvinceName(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>Cancel</Button>
                        <Button 
                            colorScheme='blue' 
                            onClick= {() => handleSubmit(data.id, provinceName)}
                        >
                        Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
  )
}

export default ModalEdit;