function split2(selected) {
  if (selected.length !== 2) {
    return;
  }
  let [first, second] = selected;
  if (second < first) {
    [first, second] = [second, first];
  }

  const votesForFirst = [];
  if (tablePart(first) !== tablePart(second)) {
    // simple division
    if (tablePart(first) === 1) {
      votesForFirst.push(6, 7, 8, 9, 10);
    } else {
      votesForFirst.push(1, 2, 3, 4, 5);
    }
  } else {
    // complex division
    for (let i = 0; i < 5; i++) {
      votesForFirst.push((first + i) % 10 + 1);
    }
  }
  const votesForSecond = [];
  for (let i = 1; i <= 10; i++) {
    if (!votesForFirst.includes(i)) {
      votesForSecond.push(i);
    }
  }
  return {
    [first]: votesForFirst,
    [second]: votesForSecond
  }
}

function tablePart(num) {
  if (num >= 1 && num <= 5) {
    return 1;
  }
  return 2;
}