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
    'https://www.figma.com/design/MuuhH5FMhvIEvca1jS1CvX/%D0%A2%D0%BE%D0%BA%D0%B5%D0%BD%D1%8B?node-id=0-1&t=Q3UPrAdUvNzcAxcI-1',

  // Компоненты
  '/components/button':
    'https://www.figma.com/design/czujzGf62skYeMfDan9RhX/%D0%9A%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0?node-id=0-1&t=OWLRD3D2GfDxpznP-1',
  '/components/input':
    'https://www.figma.com/design/AZ9HeADVHW9XdP63TM0eKK/%D0%9F%D0%BE%D0%BB%D0%B5-%D0%B2%D0%B2%D0%BE%D0%B4%D0%B0?node-id=0-1&t=z0Gd6x8EHk2wIs6o-1',
  '/components/textarea':
    'https://www.figma.com/design/FU6mXOYfHfhuLp71k6CtWy/%D0%9C%D0%BD%D0%BE%D0%B3%D0%BE%D1%81%D1%82%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D0%B5-%D0%BF%D0%BE%D0%BB%D0%B5?node-id=0-1&t=CmetCUsmYpaURjf5-1',
  '/components/select':
    'https://www.figma.com/design/OHB0dxKuF1OSxjTpnDBdaO/%D0%92%D1%8B%D0%BF%D0%B0%D0%B4%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA?node-id=0-1&t=4efOwAZcKfrJIGug-1',
  '/components/checkbox':
    'https://www.figma.com/design/uRCJ6G4zBq3vPV01LM28vP/%D0%A4%D0%BB%D0%B0%D0%B6%D0%BE%D0%BA?node-id=0-1&t=JORpoKPUVXxAG1UI-1',
  '/components/radio':
    'https://www.figma.com/design/SQiCoE14nW4iTc9zXTTzJp/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BE%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B8?node-id=0-1&t=TaQRzZxQiSzKnQQ6-1',
  '/components/file-uploader':
    'https://www.figma.com/design/XBH1UfJHX0f4dD9UyfX4iA/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2?node-id=0-1&t=Yn0jdWRgCOjmYhLi-1',
  '/components/badge':
    'https://www.figma.com/design/5ntav2iNRhzPVJaf7zIaGO/%D0%91%D0%B5%D0%B9%D0%B4%D0%B6?node-id=0-1&t=LQq9OOsea3teKFSk-1',
  '/components/card':
    'https://www.figma.com/design/no7zC0fDtVZqS3OuCOzz1U/%D0%9A%D0%B0%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B0?node-id=0-1&t=N6lXouzeBlMDKg2V-1',
  '/components/table':
    'https://www.figma.com/design/SU2N51KllhHWhb3xYDLi8C/%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0?node-id=0-1&t=GzSczDvMbqqri5aX-1',
  '/components/tabs':
    'https://www.figma.com/design/FQ0YpUZFsQ4wG5ghRnqy3T/%D0%92%D0%BA%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8?node-id=0-1&t=KRsC4695Kex1Grtl-1',
  '/components/accordion':
    'https://www.figma.com/design/l6y1TH6Mz0ijkrITuN822c/%D0%90%D0%BA%D0%BA%D0%BE%D1%80%D0%B4%D0%B5%D0%BE%D0%BD?node-id=0-1&t=OnTihDhnROhVWHKz-1',
  '/components/breadcrumbs':
    'https://www.figma.com/design/05XauqEXmxtkHjsusbwU3p/%D0%A5%D0%BB%D0%B5%D0%B1%D0%BD%D1%8B%D0%B5-%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B8?node-id=0-1&t=xyQ0Pw8bVtbZrEK1-1',
  '/components/pagination':
    'https://www.figma.com/design/3vzyUPp1Gy9PdlVOcCp4w6/%D0%9F%D0%B0%D0%B3%D0%B8%D0%BD%D0%B0%D1%86%D0%B8%D1%8F?node-id=0-1&t=yFSEWG33wtX5WAUg-1',
  '/components/search':
    'https://www.figma.com/design/i8gfrvg6wK8zWgt14Mkjqh/%D0%9F%D0%BE%D0%B8%D1%81%D0%BA?node-id=0-1&t=lEZSen3Gdl15xWzZ-1',
  '/components/notification':
    'https://www.figma.com/design/EiRXH6oFDcQsNUrSD6ky7O/%D0%A3%D0%B2%D0%B5%D0%B4%D0%BE%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5?node-id=0-1&t=NGH6KUO0OMrd7fRf-1',
  '/components/modal':
    'https://www.figma.com/design/MN5p1EGKn0LKg4hWEBTcFc/%D0%9C%D0%BE%D0%B4%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%BE%D0%BA%D0%BD%D0%BE?node-id=0-1&t=4oS1uUHCCPv3rbYu-1',
  '/components/tooltip':
    'https://www.figma.com/design/ZytPuFiqOao4MAgvoj0JCS/%D0%9F%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B0?node-id=0-1&t=xLUgJazU8vCOVMkE-1',
  '/components/icon':
    'https://www.figma.com/design/HcRgar9d1tkzcfN5YsBGHM/Untitled?node-id=0-1&t=nIzK34zuK8HcTyFR-1',
}

// Возвращает ссылку на Figma для маршрута или null, если её показывать не нужно.
export function getFigmaLink(pathname) {
  const url = FIGMA_LINKS[pathname]
  return url ? url : null
}
