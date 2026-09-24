import React from 'react';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  caption
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-800 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
        <img
          src={imageUrl}
          alt={caption}
          className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        />
        {caption && (
          <p className="mt-3 text-sm text-slate-200 bg-slate-950/80 px-4 py-2 rounded-lg border border-slate-800 text-center">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};
