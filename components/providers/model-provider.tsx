'use client';
import React, { useEffect, useState } from 'react';
import SettingModal from '../modals/SettingModal';
import CoverImageModal from '../modals/CoverImageModal';

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <SettingModal />
      <CoverImageModal />
    </>
  );
}
