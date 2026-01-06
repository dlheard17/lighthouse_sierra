'use client'

import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal'
import { Button } from '@heroui/button'
import SendEmailForm from './SendEmailForm'

type EmailModalProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function EmailModal({ isOpen, onOpenChange }: EmailModalProps) {
  const [isLoading, setLoading] = React.useState(false)
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-black">Contact Us</ModalHeader>
            <ModalBody>
              <SendEmailForm setLoading={setLoading} />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                type="submit"
                color="primary"
                form="send-email-form"
                variant="solid"
                isLoading={isLoading}
              >
                Send
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
