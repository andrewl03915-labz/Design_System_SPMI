import React from 'react'
import AppRouter from './app/router'
import PageLayout from './components/layout/PageLayout'

export default function App() {
  return (
    <PageLayout>
      <AppRouter />
    </PageLayout>
  )
}
