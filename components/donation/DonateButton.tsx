'use client'

import { useDisclosure } from '@heroui/modal'
import { Button } from '@heroui/button'
import { MdAttachMoney } from 'react-icons/md'
import DonateModal from '@/components/donation/DonateModal'

export default function DonateButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button
        color="primary"
        radius="full"
        variant="solid"
        endContent={<MdAttachMoney />}
        onPress={onOpen}
      >
        Donate
      </Button>
      <DonateModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}
