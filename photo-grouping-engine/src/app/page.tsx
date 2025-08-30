import Image from 'next/image';
import { placeholderPhotos, Photo } from '../lib/placeholder-data';
import Link from 'next/link';

const groupPhotos = (photos: Photo[]): Photo[][] => {
  const sortedPhotos = [...photos].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

  if (sortedPhotos.length === 0) {
    return [];
  }

  const allGroups: Photo[][] = [];
  let currentGroup: Photo[] = [sortedPhotos[0]];

  for (let i = 1; i < sortedPhotos.length; i++) {
    const prevPhoto = sortedPhotos[i - 1];
    const currentPhoto = sortedPhotos[i];
    const timeDiff = new Date(currentPhoto.timestamp).getTime() - new Date(prevPhoto.timestamp).getTime();

    if (timeDiff < 3000) {
      currentGroup.push(currentPhoto);
    } else {
      allGroups.push(currentGroup);
      currentGroup = [currentPhoto];
    }
  }
  allGroups.push(currentGroup);

  return allGroups.filter(group => group.length > 1);
};


const findBestShot = (group: Photo[]): Photo => {
    return group.reduce((best, current) => (current.qualityScore > best.qualityScore ? current : best), group[0]);
}

export default function Home() {
  const photoGroups = groupPhotos(placeholderPhotos.filter(p => p.type === 'photo'));
  const screenshots = placeholderPhotos.filter(p => p.type === 'screenshot');
  const blurryPhotos = placeholderPhotos.filter(p => p.type === 'blurry');

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen font-sans">
      <header className="p-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
        <h1 className="text-2xl font-bold">Photo Cleaner</h1>
      </header>
      <main className="p-4 md:p-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Photo Groups</h2>
          {photoGroups.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {photoGroups.map((group) => {
                const bestShot = findBestShot(group);
                const groupId = group.map(p => p.id).join(',');
                return (
                  <Link href={`/group/${groupId}`} key={groupId}>
                    <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                      <Image src={bestShot.url} alt={`Best shot of group`} width={300} height={300} className="w-full h-auto object-cover aspect-square" />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs font-bold rounded-full px-2 py-1">
                        {group.length}
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all"></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No photo groups found.</p>
          )}
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Smart Deletion Suggestions</h2>
          { (screenshots.length > 0 || blurryPhotos.length > 0) ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {screenshots.map((photo) => (
                  <div key={photo.id} className="relative rounded-lg overflow-hidden group">
                      <Image src={photo.url} alt="Screenshot" width={300} height={300} className="w-full h-auto object-cover aspect-square" />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold rounded-full px-2.5 py-1">
                          Screenshot
                      </div>
                  </div>
              ))}
              {blurryPhotos.map((photo) => (
                  <div key={photo.id} className="relative rounded-lg overflow-hidden group">
                      <Image src={photo.url} alt="Blurry" width={300} height={300} className="w-full h-auto object-cover aspect-square" />
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold rounded-full px-2.5 py-1">
                          Blurry
                      </div>
                  </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No deletion suggestions.</p>
          )}
        </section>
      </main>
    </div>
  );
}
