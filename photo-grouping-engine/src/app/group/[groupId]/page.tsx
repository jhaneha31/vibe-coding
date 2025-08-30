import { placeholderPhotos, Photo } from '@/lib/placeholder-data';
import Image from 'next/image';
import Link from 'next/link';

const findBestShot = (group: Photo[]): Photo => {
    return group.reduce((best, current) => (current.qualityScore > best.qualityScore ? current : best), group[0]);
}

export default function GroupReviewPage({ params }: { params: { groupId: string } }) {
    const photoIds = params.groupId.split(',');
    const photoGroup = placeholderPhotos.filter(p => photoIds.includes(p.id));

    if (photoGroup.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold">Group not found</h1>
                <Link href="/" className="mt-4 text-blue-500">
                    Back to Home
                </Link>
            </div>
        );
    }

    const bestShot = findBestShot(photoGroup);

    return (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col">
            <header className="p-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10 flex items-center">
                <Link href="/" className="mr-4 text-2xl">
                    &larr;
                </Link>
                <h1 className="text-xl font-bold">Review Group ({photoGroup.length} photos)</h1>
            </header>

            <main className="flex-grow flex flex-col overflow-hidden">
                <div className="flex-grow w-full overflow-x-auto snap-x snap-mandatory flex">
                    {photoGroup.map(photo => (
                        <div key={photo.id} className="snap-center flex-shrink-0 w-full h-full flex items-center justify-center p-4">
                            <div className="relative w-full h-full">
                                <Image
                                    src={photo.url}
                                    alt={`Photo ${photo.id}`}
                                    fill
                                    style={{objectFit: "contain"}}
                                    className="rounded-lg"
                                />
                                {photo.id === bestShot.id && (
                                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold rounded-full px-3 py-1.5">
                                        Best Shot
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <div className="flex justify-center gap-4">
                        <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg font-semibold">
                            Keep All
                        </button>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                            Keep & Delete Others
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
