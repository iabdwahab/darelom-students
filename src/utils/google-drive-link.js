// ###################
// Google Drive Book names:
// document.querySelectorAll('.KL4NAf span').forEach(el => arr.push(el.textContent))
// ###################
const booksList =
  "https://drive.google.com/file/d/1dT74X1hKQbQBRvPbgvGnCIBdfWAKzNRP/view?usp=drive_link, https://drive.google.com/file/d/1N1wn5YrSqUIOhjYMSJ3_fNskz-yP6T2w/view?usp=drive_link, https://drive.google.com/file/d/1YSjRWcor7TvPxgA03OVOt9dmdr4gWoHT/view?usp=drive_link, https://drive.google.com/file/d/133An-fufipU1vPcPB8WqO2X2VeZaRihY/view?usp=drive_link, https://drive.google.com/file/d/1RPARZJ3TJqAX98vKKLqzz_MQJyesNxCf/view?usp=drive_link";
const booksNames = [
  "أصول الفقه الإسلامي.pdf",
  "الأدب المقارن ونظرية الأدب.pdf",
  "الاتجاهات اللغوية الحديثة.pdf",
  "تحليل النص الشعري.pdf",
  "علم الأخلاق والتصوف.pdf",
];

function splitBookNames(booksNames) {
  const mappedBooksNames = booksNames.map((el) => {
    return el.split(".pdf").join("");
  });

  return mappedBooksNames;
}

function getBooksURL(booksURLList) {
  const splittedBooksList = booksURLList.split(", ");

  const booksURL = splittedBooksList.map((el) => {
    const lastIndex = el.indexOf("/view");
    return el.slice(0, lastIndex);
  });

  return booksURL;
}

function getBooksIds(booksURLs) {
  const booksIds = [];

  booksURLs.forEach((el) => {
    const splitted = el.split(
      /https:\/\/drive.google.com\/file\/d\/|\/view?usp=drive_link/
    );

    booksIds.push(splitted.join(""));
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
