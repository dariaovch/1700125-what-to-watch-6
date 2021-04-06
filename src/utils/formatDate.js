function formatDate(date) {
  const monthes = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`,
  ];

  const publishedAt = new Date(date);
  const formattedDate = `${monthes[publishedAt.getMonth()]} ${publishedAt.getDate()}, ${publishedAt.getFullYear()}`;

  return formattedDate;
}

export default formatDate;
