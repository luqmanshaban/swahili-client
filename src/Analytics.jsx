 const Analytics = (trackingId) => {
    window.gtag('js', new Date());
    window.gtag('config', trackingId);
  };
  
  export default Analytics;
