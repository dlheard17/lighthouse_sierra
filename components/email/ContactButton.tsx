'use client'

import { useDisclosure } from '@heroui/modal'
import { Button } from '@heroui/button'
import EmailModal from './EmailModal'
import { MdOutlineEmail } from 'react-icons/md'

export default function ContactButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button
        color="primary"
        radius="full"
        variant="solid"
        endContent={<MdOutlineEmail />}
        onPress={onOpen}
      >
        Contact Us
      </Button>
      <EmailModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
