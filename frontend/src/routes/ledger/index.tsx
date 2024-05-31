import Ledger from '@/ledger/Ledger'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ledger/')({
  component: Ledger
})