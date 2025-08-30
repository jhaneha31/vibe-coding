export interface Photo {
  id: string;
  url: string;
  timestamp: string;
  qualityScore: number;
  type: 'photo' | 'screenshot' | 'blurry';
}

export const placeholderPhotos: Photo[] = [
  // Group 1: 3 photos within 3 seconds
  {
    id: '1',
    url: 'https://picsum.photos/id/1015/1000/1000',
    timestamp: '2025-08-29T10:00:00Z',
    qualityScore: 0.9,
    type: 'photo',
  },
  {
    id: '2',
    url: 'https://picsum.photos/id/1016/1000/1000',
    timestamp: '2025-08-29T10:00:01Z',
    qualityScore: 0.8,
    type: 'photo',
  },
  {
    id: '3',
    url: 'https://picsum.photos/id/1018/1000/1000',
    timestamp: '2025-08-29T10:00:02Z',
    qualityScore: 0.95,
    type: 'photo',
  },

  // Group 2: 4 photos within 3 seconds
  {
    id: '4',
    url: 'https://picsum.photos/id/1025/1000/1000',
    timestamp: '2025-08-29T11:30:00Z',
    qualityScore: 0.85,
    type: 'photo',
  },
  {
    id: '5',
    url: 'https://picsum.photos/id/1026/1000/1000',
    timestamp: '2025-08-29T11:30:01Z',
    qualityScore: 0.92,
    type: 'photo',
  },
  {
    id: '6',
    url: 'https://picsum.photos/id/1027/1000/1000',
    timestamp: '2025-08-29T11:30:02Z',
    qualityScore: 0.88,
    type: 'photo',
  },
  {
    id: '7',
    url: 'https://picsum.photos/id/1028/1000/1000',
    timestamp: '2025-08-29T11:30:03Z',
    qualityScore: 0.9,
    type: 'photo',
  },

  // Group 3: 2 photos that are not in a burst
  {
    id: '8',
    url: 'https://picsum.photos/id/1035/1000/1000',
    timestamp: '2025-08-29T14:00:00Z',
    qualityScore: 0.98,
    type: 'photo',
  },
  {
    id: '9',
    url: 'https://picsum.photos/id/1036/1000/1000',
    timestamp: '2025-08-29T14:05:00Z',
    qualityScore: 0.97,
    type: 'photo',
  },

  // Group 4: 1 photo that is a screenshot
  {
    id: '10',
    url: 'https://picsum.photos/id/1040/1000/1000',
    timestamp: '2025-08-29T15:00:00Z',
    qualityScore: 0.7,
    type: 'screenshot',
  },

  // Group 5: 1 photo that is blurry (low quality score)
  {
    id: '11',
    url: 'https://picsum.photos/id/1041/1000/1000',
    timestamp: '2025-08-29T16:00:00Z',
    qualityScore: 0.3,
    type: 'blurry',
  },
];
