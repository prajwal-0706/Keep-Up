'use client';

import CoverImage from '@/components/CoverImage';
import Toolbar from '@/components/Toolbar';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useMutation, useQuery } from 'convex/react';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

interface DocumentPageProps {
  params: {
    documentId: Id<'documents'>;
  };
}

export default function Page({ params }: DocumentPageProps) {
  const Editor = useMemo(
    () => dynamic(() => import('@/components/Editor'), { ssr: false }),
    []
  );

  const documents = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content,
    });
  };

  if (documents === undefined) {
    return (
      <div className="">
        <CoverImage.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (documents === null) {
    return null;
  }

  return (
    <div className="pb-40">
      <CoverImage url={documents.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={documents} />
        <Editor onChange={onChange} initialContent={documents.content} />
      </div>
    </div>
  );
}
