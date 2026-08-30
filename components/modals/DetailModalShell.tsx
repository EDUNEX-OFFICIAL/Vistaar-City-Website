"use client";

import { useEffect, useLayoutEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useDetailModal } from "@/hooks/use-detail-modal";
import { modalCloseBtn } from "@/lib/modal-styles";

type DetailModalShellProps = {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
  panelClassName?: string;
};

export default function DetailModalShell({
  isOpen,
  onClose,
  titleId,
  header,
  footer,
  children,
  panelClassName = "max-w-2xl",
}: DetailModalShellProps) {
  const { panelRef, closeButtonRef } = useDetailModal(isOpen, onClose);
  const [reduceMotion, setReduceMotion] = useState(false);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduceMotion(prefersReduced);
    if (prefersReduced) {
      document.documentElement.classList.add("motion-reduce");
    }
  }, []);

  const overlayMotion = reduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, exit: { opacity: 1 } }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

  const panelMotion = reduceMotion
    ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 1, y: 0 } }
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 24 } };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          {...overlayMotion}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            {...panelMotion}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
            className={`flex h-[92vh] w-full ${panelClassName} flex-col overflow-hidden rounded-t-sm bg-ivory shadow-2xl sm:h-auto sm:max-h-[90vh] sm:rounded-sm`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-sand-200 px-4 py-4 sm:px-5 md:px-6">
              <div className="min-w-0 flex-1">{header}</div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className={modalCloseBtn}
                aria-label="Close details"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6 md:py-6">{children}</div>

            <div className="shrink-0 border-t border-sand-200 bg-ivory px-5 py-4 md:px-6">
              <div className="flex gap-3">{footer}</div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
