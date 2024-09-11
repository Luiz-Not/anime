export const getAverageScoreColor = (averageScore: number): string => {
  if (averageScore >= 80) {
    return 'bg-green'
  } else if (averageScore >= 50) {
    return 'bg-yellow'
  }
  return 'bg-red'
}
