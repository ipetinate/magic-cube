import { Outlet } from 'react-router-dom'

import { AppProviders } from '../context'
import { GithubCornerTag } from '../components/GithubCornerTag'

export function App() {
  return (
    <AppProviders>
      <GithubCornerTag />

      <Outlet />
    </AppProviders>
  )
}
