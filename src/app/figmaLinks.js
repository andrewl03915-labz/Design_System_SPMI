// Ссылки на макеты Figma для страниц дизайн-системы.
//
// Каждая страница ведёт на свой отдельный файл Figma (прямо на нужный фрейм
// через ?node-id=...). Пустая строка ('') скрывает кнопку «Открыть в Figma»
// на этой странице. Кнопка показывается только на перечисленных маршрутах.

const FIGMA_LINKS = {
  // Основы
  '/foundations/color':
    'https://www.figma.com/design/cNzkl7v7cwXCKWko53hgDl/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0?node-id=0-1&t=D3vcBNODswaCVHEp-1',
  '/foundations/typography':
    'https://www.figma.com/design/jE7uCRvYCBbi7oJNCTwwyJ/%D0%A2%D0%B8%D0%BF%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0?node-id=0-1&t=o0DmLM9DCenasB2d-1',
  '/foundations/grid':
    'https://www.figma.com/design/NrBsUmAWCPFNcXuuuzkYmj/%D0%A1%D0%B5%D1%82%D0%BA%D0%B0?node-id=0-1&t=0MuomsBSojPUoOaH-1',
  '/foundations/tokens':
    'https://www.figma.com/design/czujzGf62skYeMfDan9RhX/%D0%A2%D0%BE%D0%BA%D0%B5%D0%BD%D1%8B?node-id=0-1&t=FJRm8EoUNmQhyF0w-1',

  // Компоненты
  '/components/button':
    'https://www.figma.com/design/YfPYPU2M2RuWLuayJtBaqc/%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0?node-id=0-1&t=uUBd6Vafv3bfaIsl-1',
  '/components/input':
    'https://www.figma.com/design/t2Kg3w96eoyIg7G6ZxED5F/%D0%9F%D0%BE%D0%BB%D0%B5-%D0%B2%D0%B2%D0%BE%D0%B4%D0%B0?node-id=0-1&t=IjGRuJeUtafcmvvq-1',
  '/components/textarea':
    'https://www.figma.com/design/dDDw6H0klijX2ZvZohSOW3/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5?node-id=0-1&t=Mmj7P3SQZU8OfL6m-1',
  '/components/select':
    'https://www.figma.com/design/NOhv3cDUEHmTZIPjiFMTNJ/%D0%92%D1%8B%D0%BF%D0%B0%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA?node-id=0-1&t=RtfyZ6tmKI5ZnRMP-1',
  '/components/checkbox':
    'https://www.figma.com/design/CVxMhxzvggD6OoWSw40Bhr/%D0%A4%D0%BB%D0%B0%D0%B6%D0%BE%D0%BA?node-id=0-1&t=Zsk2W4UGfsretV21-1',
  '/components/radio':
    'https://www.figma.com/design/Zbro6Z1FdXzHB7XGOWAD5P/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BE%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8?node-id=0-1&t=DNRjRl6ddkR4q8nS-1',
  '/components/file-uploader':
    'https://www.figma.com/design/uCLSknhe7B72nVv9vygxiN/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2?node-id=0-1&t=O9lXwKNuOz0cBuZt-1',
  '/components/badge':
    'https://www.figma.com/design/dkaRvLOxImNUMMN3Lc2fZO/%D0%92%D1%8B%D0%BF%D0%B0%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA--Copy-?node-id=0-1&t=wqibvtPIKM8fc0PG-1',
  '/components/card':
    'https://www.figma.com/design/F9zmlJKbbmFZlTjz50gqqD/%D0%9A%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0?node-id=0-1&t=aY8SVCywKqkqyOZi-1',
  '/components/table':
    'https://www.figma.com/design/BTltIUoWV8DHX5J0ife7UJ/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0?node-id=0-1&t=JzxuQqpjbDlvkFtN-1',
  '/components/tabs':
    'https://www.figma.com/design/X8Gt3U707kb4FISYkRYSGs/%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0--Copy---Copy-?node-id=0-1&t=Ea91Ql8MyNabozIw-1',
  '/components/accordion':
    'https://www.figma.com/design/CaakKEYrh8UyYQy6AI12AP/%D0%90%D0%BA%D0%BA%D0%BE%D1%80%D0%B4%D0%B5%D0%BE%D0%BD?node-id=0-1&t=fV7C7X4lmbzLGvYv-1',
  '/components/breadcrumbs':
    'https://www.figma.com/design/etOuF3Pkybb288s5PfMkBk/%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0--Copy---Copy-?node-id=0-1&t=vjGhs8XX6x8BlYZX-1',
  '/components/pagination':
    'https://www.figma.com/design/lFuvT385YmtH3b492tEJiX/%D0%9F%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F?node-id=0-1&t=VDYFY0A1erwTHziH-1',
  '/components/search':
    'https://www.figma.com/design/qBZCEc4HRfp0dRDEnYasWR/%D0%9F%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F--Copy-?node-id=0-1&t=r8ri4YQyzxr2HsWS-1',
  '/components/notification':
    'https://www.figma.com/design/4aRSgPzAuf7bYiysXLK8wV/%D0%A3%D0%B2%D0%B5%D0%B4%D0%BE%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F?node-id=0-1&t=yJQrVh3w0ElgMhw9-1',
  '/components/modal':
    'https://www.figma.com/design/lPq91Eh44MvxDxl4hFnzws/%D0%9C%D0%BE%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BE%D0%BA%D0%BD%D0%B0?node-id=0-1&t=PCv0CWEebWLL030k-1',
  '/components/tooltip':
    'https://www.figma.com/design/zjKibJda9XGTGFuTm8Plpm/%D0%9F%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B8?node-id=0-1&t=bGuKcsfsoBs4fSr7-1',
  '/components/icon':
    'https://www.figma.com/design/xAMFUmN8qNzIgrLkUhyiuI/%D0%98%D0%BA%D0%BE%D0%BD%D0%BA%D0%B8?node-id=0-1&t=zilIXmMQmPNgIaDR-1',
}

// Возвращает ссылку на Figma для маршрута или null, если её показывать не нужно.
export function getFigmaLink(pathname) {
  const url = FIGMA_LINKS[pathname]
  return url ? url : null
}
