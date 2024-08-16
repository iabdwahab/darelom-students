// ###################
// Google Drive Book names:
// document.querySelectorAll('.KL4NAf span').forEach(el => arr.push(el.textContent))
// ###################
const booksList =
  "https://drive.google.com/file/d/1O3Xr6JVoEpsXK3jgXMvipaJZ5fayR8Hq/view?usp=drive_link, https://drive.google.com/file/d/1pRCxSSoRXqEoWiM0WSShLGnqSiQBDuj2/view?usp=drive_link, https://drive.google.com/file/d/1sa9HxzaUv3YlRIrjKEVHDptY71rsGDFx/view?usp=drive_link, https://drive.google.com/file/d/1oy-5U1wJjTmAivke66uhFhCLlCQMJdmv/view?usp=drive_link, https://drive.google.com/file/d/1MSOJLHvG4VMmilV9R0NgmDMKXv-749eF/view?usp=drive_link, https://drive.google.com/file/d/1vMM3sn3eq1aZZow05oXEMlH79C9OQdyF/view?usp=drive_link, https://drive.google.com/file/d/1BuLY6weMEKuAzDsjaduEjDHBEyZqEYet/view?usp=drive_link, https://drive.google.com/file/d/1ngrc7mFWy6Yx4CsPWxvwkuLWZcM79jWU/view?usp=drive_link, https://drive.google.com/file/d/1U_OJfItVWOvTom4OXQj2u30Laap91rhn/view?usp=drive_link, https://drive.google.com/file/d/1gfmqLT0m1tgP92yILlQ7sjJrDMa3oNLE/view?usp=drive_link";
const booksNames = [
  "علوم القرآن والسنة.pdf",
  "علم اللغة الحاسوبي وعلم الدلالة.pdf",
  "النحو 3 - ممتدة.pdf",
  "اللغة الفارسية 3.pdf",
  "اللغة العبرية 3.pdf",
  "اللغة الأوربية 3 - ممتدة.pdf",
  "الصرف والعروض 3.pdf",
  "التدريبات الأدبية - ممتدة.pdf",
  "الأدب المقارن.pdf",
  "الأدب العباسي والأندلسي.pdf",
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
