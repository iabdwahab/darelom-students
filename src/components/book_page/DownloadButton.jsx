const DownloadButton = ({ bookId }) => {
  const className = 'btn btn-primary p-2 px-5 w-100';

  function startDownloading() {
    window.location.href = `https://drive.google.com/uc?export=download&id=${bookId}`;
  }

  return (
    <button className={className} onClick={startDownloading}>
      تحميل
    </button>
  );
};

export default DownloadButton;
