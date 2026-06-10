import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Foundations from '../pages/Foundations'
import Tokens from '../pages/Tokens'

import BadgePage from '../pages/BadgePage'
import ButtonPage from '../pages/ButtonPage'
import InputPage from '../pages/InputPage'
import TextareaPage from '../pages/TextareaPage'
import GridPage from '../pages/GridPage'
import CardPage from '../pages/CardPage'
import SelectPage from '../pages/SelectPage'
import CheckboxPage from '../pages/CheckboxPage'
import TabsPage from '../pages/TabsPage'
import NotificationPage from '../pages/NotificationPage'
import TablePage from '../pages/TablePage'
import ModalPage from '../pages/ModalPage'
import BreadcrumbsPage from '../pages/BreadcrumbsPage'
import AccordionPage from '../pages/AccordionPage'
import PaginationPage from '../pages/PaginationPage'
import SearchPage from '../pages/SearchPage'
import FileUploaderPage from '../pages/FileUploaderPage'
import RadioPage from '../pages/RadioPage'
import TooltipPage from '../pages/TooltipPage'
import IconPage from '../pages/IconPage'

import ColorsPage from '../pages/ColorsPage'
import TypographyPage from '../pages/TypographyPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Foundations */}
      <Route path="/foundations" element={<Foundations />} />
      <Route path="/foundations/color" element={<ColorsPage />} />
      <Route path="/foundations/typography" element={<TypographyPage />} />
      <Route path="/foundations/grid" element={<GridPage />} />
      <Route path="/foundations/tokens" element={<Tokens />} />

      {/* Backward compatibility */}
      <Route path="/tokens" element={<Navigate to="/foundations/tokens" replace />} />
      <Route path="/components/grid" element={<Navigate to="/foundations/grid" replace />} />

      {/* Components */}
      <Route path="/components/badge" element={<BadgePage />} />
      <Route path="/components/button" element={<ButtonPage />} />
      <Route path="/components/input" element={<InputPage />} />
      <Route path="/components/textarea" element={<TextareaPage />} />
      <Route path="/components/card" element={<CardPage />} />
      <Route path="/components/select" element={<SelectPage />} />
      <Route path="/components/checkbox" element={<CheckboxPage />} />
      <Route path="/components/tabs" element={<TabsPage />} />
      <Route path="/components/notification" element={<NotificationPage />} />
      <Route path="/components/table" element={<TablePage />} />
      <Route path="/components/modal" element={<ModalPage />} />
      <Route path="/components/breadcrumbs" element={<BreadcrumbsPage />} />
      <Route path="/components/accordion" element={<AccordionPage />} />
      <Route path="/components/pagination" element={<PaginationPage />} />
      <Route path="/components/search" element={<SearchPage />} />
      <Route path="/components/file-uploader" element={<FileUploaderPage />} />
      <Route path="/components/radio" element={<RadioPage />} />
      <Route path="/components/tooltip" element={<TooltipPage />} />
      <Route path="/components/icon" element={<IconPage />} />
    </Routes>
  )
}