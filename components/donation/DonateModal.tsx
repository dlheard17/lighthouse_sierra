'use client'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal'
import { Button } from '@heroui/button'

type DonateModalProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function DonateModal({ isOpen, onOpenChange }: DonateModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Donate</ModalHeader>
            <ModalBody>
              <p>Also coming soon!</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
