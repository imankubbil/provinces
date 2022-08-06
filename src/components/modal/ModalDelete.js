import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Text
} from "@chakra-ui/react";

const ModalDelete = ({isOpen, onClose, handleDelete}) => {
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
                        <Text>Apakah kamu yakin ingin menghapus ini?</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>Cancel</Button>
                        <Button 
                            colorScheme='blue' 
                            onClick= {handleDelete}
                        >
                        Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
  )
}

export default ModalDelete;