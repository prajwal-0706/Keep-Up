'use client';

import Toolbar from '@/components/Toolbar';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';

interface DocumentPageProps {
  params: {
    documentId: Id<'documents'>;
  };
}

export default function Page({ params }: DocumentPageProps) {
  const documents = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  if (documents === undefined) {
    return <div>Loading...</div>;
  }

  if (documents === null) {
    return null;
  }

  return (
    <div className="pb-40">
      <div className="h-[35vh]" />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={documents} />
      </div>
    </div>
  );
}
