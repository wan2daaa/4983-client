export default function useformatTimeAgo(createdAt: string) {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const timeDifferenceInSeconds = Math.floor(
    (now.valueOf() - createdDate.valueOf()) / 1000,
  );

  if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds}초 전`;
  }
  if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes}분 전`;
  }
  const hours = Math.floor(timeDifferenceInSeconds / 3600);
  return `${hours}시간 전`;
}
