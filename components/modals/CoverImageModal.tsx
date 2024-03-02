'use client';

import { useMutation } from 'convex/react';
import { useState } from 'react';

import { useCoverImage } from '@/hooks/use-cover-image';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { useEdgeStore } from '@/lib/edgestore';
import { api } from '@/convex/_generated/api';
import { useParams } from 'next/navigation';
import { Id } from '@/convex/_generated/dataModel';
import { SingleImageDropzone } from '../single-image-dropzone';

export default function CoverImageModal() {
  const params = useParams();
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();
  const update = useMutation(api.documents.update);

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<'documents'>,
        coverImage: res.url,
      });

      onClose();
    }
  };

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover image</h2>
        </DialogHeader>
        <SingleImageDropzone
          onChange={onChange}
          disabled={isSubmitting}
          value={file}
          className="w-full outline-none"
        />
      </DialogContent>
    </Dialog>
  );
}
