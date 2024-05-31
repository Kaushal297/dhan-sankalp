import Accounts from '@/Accounts/Account'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/accounts/')({
  component: Accounts,
})