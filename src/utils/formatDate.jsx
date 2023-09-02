function formatDate(date) {
  if (!date) return;

  const d = new Date(date)
  const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie']
  const formattedDate = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`

  return formattedDate
}

export default formatDate