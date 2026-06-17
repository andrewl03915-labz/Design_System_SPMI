import AppRouter from './app/router'
import PageLayout from './components/layout/PageLayout'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <AppRouter />
    </PageLayout>
  )
}
