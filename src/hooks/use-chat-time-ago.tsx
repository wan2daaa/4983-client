export default function useChatTimeAgo(
  dateParam: Date | string,
): string | null {
  if (!dateParam) {
    return null;
  }
  const date = typeof dateParam === "object" ? dateParam : new Date(dateParam);
  const today = new Date();
  const hours = Math.round(
    (today.getTime() - date.getTime()) / (1000 * 60 * 60),
  );
  const days = Math.round(hours / 24);

  if (hours < 24) {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }
  return `${days}일 전`;
}
