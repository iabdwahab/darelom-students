const BookIframe = ({ bookId, isIframeLoading, setIsIframeLoading }) => {
  const source = `https://drive.google.com/file/d/${bookId}/preview`;
  const className = `${isIframeLoading && 'd-none'} w-100`;
  const styles = {
    height: '500px',
  };

  function handleLoading() {
    setIsIframeLoading(false);
  }

  return <iframe src={source} onLoad={handleLoading} className={className} style={styles}></iframe>;
};

export default BookIframe;
