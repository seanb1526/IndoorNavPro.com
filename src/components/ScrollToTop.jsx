import useScrollToTop from '../hooks/useScrollToTop';

// This is a utility component that doesn't render anything
// It just uses the hook to trigger scrolling behavior
function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default ScrollToTop;
