// ###################
// Google Drive Book names:
// document.querySelectorAll('.KL4NAf span').forEach(el => arr.push(el.textContent))
// ###################
const booksList =
  'https://drive.google.com/file/d/1AD-QnjgC6_padQB3Wz6Atpg5BS3eaDSw/view?usp=drive_link, https://drive.google.com/file/d/1nyvDLT7wa4qmlSNqqIeZb0gFIFILIxuW/view?usp=drive_link, https://drive.google.com/file/d/1CK4Lk2-yMl1_dIGvPeNkvj-ZSBy1DmFT/view?usp=drive_link, https://drive.google.com/file/d/1U6qtj4-OtBcKBxyEZeiKvbM16-DjgWGn/view?usp=drive_link, https://drive.google.com/file/d/16-7_aAcAXYENBwCH4dSHwgFHx-mJYvrR/view?usp=drive_link, https://drive.google.com/file/d/1d8fO4oQNYHl7raVwm-XRk-h1u8cTxSed/view?usp=drive_link';
const booksNames = [
  'قصص التوراة في ضوء النقد الأدبي - د. سعيد عطية مطاوع.pdf',
  'في اللهجات العربية - د. إبراهيم أنيس.pdf',
  'فقه اللغة - د. علي عبد الواحد.pdf',
  'تاريخ الديانة اليهودية - د. محمد خليفة حسن.pdf',
  'الشعر في العهد القديم - د. سعيد عطية مطاوع.pdf',
  'التراث الديني اليهودي في الشعر العبري الأندلسي - د. سعيد عطية مطاوع.pdf',
];

function splitBookNames(booksNames) {
  const mappedBooksNames = booksNames.map((el) => {
    return el.split('.pdf').join('');
  });

  return mappedBooksNames;
}

function getBooksURL(booksURLList) {
  const splittedBooksList = booksURLList.split(', ');

  const booksURL = splittedBooksList.map((el) => {
    const lastIndex = el.indexOf('/view');
    return el.slice(0, lastIndex);
  });

  return booksURL;
}

function getBooksIds(booksURLs) {
  const booksIds = [];

  booksURLs.forEach((el) => {
    const splitted = el.split(/https:\/\/drive.google.com\/file\/d\/|\/view?usp=drive_link/);

    booksIds.push(splitted.join(''));
  });

  return booksIds;
}

function getFinalJSON(bookNames, booksURLList) {
  const names = splitBookNames(bookNames);
  const urls = getBooksURL(booksURLList);
  const ids = getBooksIds(urls);

  const final = [];

  for (let i = 0; i < booksNames.length; i++) {
    final.push({
      book_name: names[i],
      book_gdrive_url: urls[i],
      book_gdrive_id: ids[i],
    });
  }

  return final;
}

console.log(getFinalJSON(booksNames, booksList));
